const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs').promises;

const PROTO_PATH = './protos/speech_service.proto';
const API_KEY = process.env.SONIOX_API_KEY;
const AUDIO_PATH = process.env.AUDIO_FILE_PATH;
const CHUNK_SIZE = 320;
const SEND_INTERVAL_MS = 20;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const speech_service = grpc.loadPackageDefinition(packageDefinition).soniox.speech_service;
const client = new speech_service.SpeechService('api.soniox.com:443', grpc.credentials.createSsl());

function createConfigRequest() {
  return {
    api_key: API_KEY,
    config: {
      audio_format: 'pcm_s16le',
      sample_rate_hertz: 8000,
      num_audio_channels: 1,
      enable_interim_results: true,
    },
    storage_config: {
      object_id: 'streaming recognition test',
    }
  };
}

function createAudioRequest(chunk) {
  return {
    audio: chunk,
  };
}

async function sendAudioChunks(call, audioData) {
  return new Promise((resolve) => {
    let position = 0;
    let chunkCounter = 0;

    const intervalId = setInterval(() => {
      if (position >= audioData.length) {
        clearInterval(intervalId);
        resolve(chunkCounter);
        return;
      }

      const chunk = audioData.slice(position, position + CHUNK_SIZE);
      call.write(createAudioRequest(chunk));

      position += CHUNK_SIZE;
      chunkCounter++;
    }, SEND_INTERVAL_MS);
  });
}

async function main() {
  const call = client.TranscribeStream();

  call.on('data', (response) => {
    const now = new Date();
    const timeOffset = now.getTime() - startTime.getTime();
    console.log(`[${timeOffset} ms] Received: `, JSON.stringify(response));
  });

  call.on('error', (error) => {
    console.error('Error: ', error);
  });

  call.on('end', () => {
    console.log('Transcription completed.');
  });

  // Read the entire audio file into a buffer
  const audioData = await fs.readFile(AUDIO_PATH);

  // Send config request
  call.write(createConfigRequest());

  // Start the timer
  const startTime = new Date();

  // Send audio requests with a delay
  const totalChunks = await sendAudioChunks(call, audioData);

  // Close the call
  call.end();

  console.log(`Total chunks sent: ${totalChunks}`);
}

main();
