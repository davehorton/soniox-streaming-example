# soniox-streaming-test

This is a simple Node.js application that tests the Soniox streaming API by sending raw audio frames with a 20 millisecond frame rate, as on telephony networks. The audio format is PCM linear 16-bit with 8khz sampling.  

The test file provided contains 8 seconds of audio.  The speaker begins speaking at roughly 3 seconds and 300 milliseconds and speaks until about the 6 second 500 millisecond time.  The audio ends at 8 seconds.

The speaker is saying: "Is the meeting tomorrow in the green room, or the red room?"

Interim transcripts are requested, and the purpose of the test is to see how soon after the speaker begins speaking we start to get interim transcripts.  Every response from Soniox is logged with a timestamp. 

# Installing and running the test
```bash
npm ci
SONIOX_API_KEY=<your-key> AUDIO_FILE_PATH=./data/is-the-meeting-tomorrow.raw node 
```

To test against a different audio file, simply replace the environment variable above to point to your file.  The encoding and sample rate must be as specified above.

# Results
My results do not show any interim transcripts being returned.
```
SONIOX_API_KEY=<api-key> AUDIO_FILE_PATH=./data/is-the-meeting-tomorrow.raw npm start

> soniox-streaming-test@1.0.0 start
> node index.js

[264 ms] Received:  {"result":null}
[271 ms] Received:  {"result":null}
[272 ms] Received:  {"result":null}
[272 ms] Received:  {"result":null}
[272 ms] Received:  {"result":null}
[272 ms] Received:  {"result":null}
[273 ms] Received:  {"result":null}
[273 ms] Received:  {"result":null}
[273 ms] Received:  {"result":null}
[273 ms] Received:  {"result":null}
[273 ms] Received:  {"result":null}
[279 ms] Received:  {"result":null}
[301 ms] Received:  {"result":null}
[322 ms] Received:  {"result":null}
[342 ms] Received:  {"result":null}
[364 ms] Received:  {"result":null}
[384 ms] Received:  {"result":null}
[407 ms] Received:  {"result":null}
[426 ms] Received:  {"result":null}
[447 ms] Received:  {"result":null}
[468 ms] Received:  {"result":null}
[489 ms] Received:  {"result":null}
[511 ms] Received:  {"result":null}
[533 ms] Received:  {"result":null}
[553 ms] Received:  {"result":null}
[574 ms] Received:  {"result":null}
[593 ms] Received:  {"result":null}
[614 ms] Received:  {"result":null}
[635 ms] Received:  {"result":null}
[658 ms] Received:  {"result":null}
[679 ms] Received:  {"result":null}
[700 ms] Received:  {"result":null}
[724 ms] Received:  {"result":null}
[743 ms] Received:  {"result":null}
[764 ms] Received:  {"result":null}
[786 ms] Received:  {"result":null}
[809 ms] Received:  {"result":null}
[828 ms] Received:  {"result":null}
[851 ms] Received:  {"result":null}
[872 ms] Received:  {"result":null}
[893 ms] Received:  {"result":null}
[911 ms] Received:  {"result":null}
[933 ms] Received:  {"result":null}
[962 ms] Received:  {"result":null}
[980 ms] Received:  {"result":null}
[1000 ms] Received:  {"result":null}
[1020 ms] Received:  {"result":null}
[1043 ms] Received:  {"result":null}
[1063 ms] Received:  {"result":null}
[1086 ms] Received:  {"result":null}
[1109 ms] Received:  {"result":null}
[1126 ms] Received:  {"result":null}
[1148 ms] Received:  {"result":null}
[1170 ms] Received:  {"result":null}
[1257 ms] Received:  {"result":null}
[1258 ms] Received:  {"result":null}
[1258 ms] Received:  {"result":null}
[1258 ms] Received:  {"result":null}
[1279 ms] Received:  {"result":null}
[1299 ms] Received:  {"result":null}
[1317 ms] Received:  {"result":null}
[1342 ms] Received:  {"result":null}
[1361 ms] Received:  {"result":null}
[1381 ms] Received:  {"result":null}
[1404 ms] Received:  {"result":null}
[1423 ms] Received:  {"result":null}
[1444 ms] Received:  {"result":null}
[1467 ms] Received:  {"result":null}
[1492 ms] Received:  {"result":null}
[1510 ms] Received:  {"result":null}
[1532 ms] Received:  {"result":null}
[1558 ms] Received:  {"result":null}
[1573 ms] Received:  {"result":null}
[1595 ms] Received:  {"result":null}
[1614 ms] Received:  {"result":null}
[1634 ms] Received:  {"result":null}
[1661 ms] Received:  {"result":null}
[1679 ms] Received:  {"result":null}
[1699 ms] Received:  {"result":null}
[1727 ms] Received:  {"result":null}
[1747 ms] Received:  {"result":null}
[1768 ms] Received:  {"result":null}
[1788 ms] Received:  {"result":null}
[1810 ms] Received:  {"result":null}
[1831 ms] Received:  {"result":null}
[1852 ms] Received:  {"result":null}
[1874 ms] Received:  {"result":null}
[1894 ms] Received:  {"result":null}
[1915 ms] Received:  {"result":null}
[1940 ms] Received:  {"result":null}
[1959 ms] Received:  {"result":null}
[1978 ms] Received:  {"result":null}
[1999 ms] Received:  {"result":null}
[2024 ms] Received:  {"result":null}
[2046 ms] Received:  {"result":null}
[2065 ms] Received:  {"result":null}
[2087 ms] Received:  {"result":null}
[2110 ms] Received:  {"result":null}
[2130 ms] Received:  {"result":null}
[2150 ms] Received:  {"result":null}
[2172 ms] Received:  {"result":null}
[2194 ms] Received:  {"result":null}
[2218 ms] Received:  {"result":null}
[2236 ms] Received:  {"result":null}
[2259 ms] Received:  {"result":null}
[2280 ms] Received:  {"result":null}
[2301 ms] Received:  {"result":null}
[2327 ms] Received:  {"result":null}
[2343 ms] Received:  {"result":null}
[2373 ms] Received:  {"result":null}
[2386 ms] Received:  {"result":null}
[2410 ms] Received:  {"result":null}
[2428 ms] Received:  {"result":null}
[2448 ms] Received:  {"result":null}
[2473 ms] Received:  {"result":null}
[2493 ms] Received:  {"result":null}
[2513 ms] Received:  {"result":null}
[2535 ms] Received:  {"result":null}
[2558 ms] Received:  {"result":null}
[2579 ms] Received:  {"result":null}
[2599 ms] Received:  {"result":null}
[2626 ms] Received:  {"result":null}
[2642 ms] Received:  {"result":null}
[2663 ms] Received:  {"result":null}
[2685 ms] Received:  {"result":null}
[2711 ms] Received:  {"result":null}
[2732 ms] Received:  {"result":null}
[2754 ms] Received:  {"result":null}
[2774 ms] Received:  {"result":null}
[2793 ms] Received:  {"result":null}
[2813 ms] Received:  {"result":null}
[2835 ms] Received:  {"result":null}
[2858 ms] Received:  {"result":null}
[2876 ms] Received:  {"result":null}
[2897 ms] Received:  {"result":null}
[2918 ms] Received:  {"result":null}
[2941 ms] Received:  {"result":null}
[2961 ms] Received:  {"result":null}
[2982 ms] Received:  {"result":null}
[3002 ms] Received:  {"result":null}
[3025 ms] Received:  {"result":null}
[3046 ms] Received:  {"result":null}
[3066 ms] Received:  {"result":null}
[3093 ms] Received:  {"result":null}
[3109 ms] Received:  {"result":null}
[3131 ms] Received:  {"result":null}
[3152 ms] Received:  {"result":null}
[3176 ms] Received:  {"result":null}
[3195 ms] Received:  {"result":null}
[3216 ms] Received:  {"result":null}
[3241 ms] Received:  {"result":null}
[3262 ms] Received:  {"result":null}
[3282 ms] Received:  {"result":null}
[3307 ms] Received:  {"result":null}
[3327 ms] Received:  {"result":null}
[3345 ms] Received:  {"result":null}
[3367 ms] Received:  {"result":null}
[3387 ms] Received:  {"result":null}
[3411 ms] Received:  {"result":null}
[3431 ms] Received:  {"result":null}
[3452 ms] Received:  {"result":null}
[3475 ms] Received:  {"result":null}
[3494 ms] Received:  {"result":null}
[3515 ms] Received:  {"result":null}
[3540 ms] Received:  {"result":null}
[3563 ms] Received:  {"result":null}
[3584 ms] Received:  {"result":null}
[3608 ms] Received:  {"result":null}
[3629 ms] Received:  {"result":null}
[3649 ms] Received:  {"result":null}
[3681 ms] Received:  {"result":null}
[3696 ms] Received:  {"result":null}
[3713 ms] Received:  {"result":null}
[3735 ms] Received:  {"result":null}
[3761 ms] Received:  {"result":null}
[3781 ms] Received:  {"result":null}
[3801 ms] Received:  {"result":null}
[3824 ms] Received:  {"result":null}
[3845 ms] Received:  {"result":null}
[3865 ms] Received:  {"result":null}
[3886 ms] Received:  {"result":null}
[3910 ms] Received:  {"result":null}
[3931 ms] Received:  {"result":null}
[3960 ms] Received:  {"result":null}
[3976 ms] Received:  {"result":null}
[3995 ms] Received:  {"result":null}
[4015 ms] Received:  {"result":null}
[4036 ms] Received:  {"result":null}
[4059 ms] Received:  {"result":null}
[4077 ms] Received:  {"result":null}
[4098 ms] Received:  {"result":null}
[4129 ms] Received:  {"result":null}
[4143 ms] Received:  {"result":null}
[4169 ms] Received:  {"result":null}
[4183 ms] Received:  {"result":null}
[4214 ms] Received:  {"result":null}
[4230 ms] Received:  {"result":null}
[4259 ms] Received:  {"result":null}
[4275 ms] Received:  {"result":null}
[4295 ms] Received:  {"result":null}
[4316 ms] Received:  {"result":null}
[4340 ms] Received:  {"result":null}
[4360 ms] Received:  {"result":null}
[4379 ms] Received:  {"result":null}
[4401 ms] Received:  {"result":null}
[4423 ms] Received:  {"result":null}
[4443 ms] Received:  {"result":null}
[4462 ms] Received:  {"result":null}
[4483 ms] Received:  {"result":null}
[4512 ms] Received:  {"result":null}
[4528 ms] Received:  {"result":null}
[4549 ms] Received:  {"result":null}
[4579 ms] Received:  {"result":null}
[4591 ms] Received:  {"result":null}
[4612 ms] Received:  {"result":null}
[4633 ms] Received:  {"result":null}
[4654 ms] Received:  {"result":null}
[4676 ms] Received:  {"result":null}
[4696 ms] Received:  {"result":null}
[4717 ms] Received:  {"result":null}
[4741 ms] Received:  {"result":null}
[4761 ms] Received:  {"result":null}
[4782 ms] Received:  {"result":null}
[4805 ms] Received:  {"result":null}
[4824 ms] Received:  {"result":null}
[4845 ms] Received:  {"result":null}
[4866 ms] Received:  {"result":null}
[4886 ms] Received:  {"result":null}
[4909 ms] Received:  {"result":null}
[4928 ms] Received:  {"result":null}
[4950 ms] Received:  {"result":null}
[4970 ms] Received:  {"result":null}
[4990 ms] Received:  {"result":null}
[5013 ms] Received:  {"result":null}
[5032 ms] Received:  {"result":null}
[5058 ms] Received:  {"result":null}
[5077 ms] Received:  {"result":null}
[5098 ms] Received:  {"result":null}
[5118 ms] Received:  {"result":null}
[5142 ms] Received:  {"result":null}
[5161 ms] Received:  {"result":null}
[5183 ms] Received:  {"result":null}
[5210 ms] Received:  {"result":null}
[5227 ms] Received:  {"result":null}
[5245 ms] Received:  {"result":null}
[5265 ms] Received:  {"result":null}
[5289 ms] Received:  {"result":null}
[5308 ms] Received:  {"result":null}
[5330 ms] Received:  {"result":null}
[5352 ms] Received:  {"result":null}
[5374 ms] Received:  {"result":null}
[5394 ms] Received:  {"result":null}
[5415 ms] Received:  {"result":null}
[5438 ms] Received:  {"result":null}
[5462 ms] Received:  {"result":null}
[5482 ms] Received:  {"result":null}
[5510 ms] Received:  {"result":null}
[5527 ms] Received:  {"result":null}
[5545 ms] Received:  {"result":null}
[5566 ms] Received:  {"result":null}
[5590 ms] Received:  {"result":null}
[5610 ms] Received:  {"result":null}
[5631 ms] Received:  {"result":null}
[5652 ms] Received:  {"result":null}
[5674 ms] Received:  {"result":null}
[5695 ms] Received:  {"result":null}
[5716 ms] Received:  {"result":null}
[5737 ms] Received:  {"result":null}
[5760 ms] Received:  {"result":null}
[5781 ms] Received:  {"result":null}
[5803 ms] Received:  {"result":null}
[5824 ms] Received:  {"result":null}
[5845 ms] Received:  {"result":null}
[5864 ms] Received:  {"result":null}
[5886 ms] Received:  {"result":null}
[5909 ms] Received:  {"result":null}
[5928 ms] Received:  {"result":null}
[5951 ms] Received:  {"result":null}
[5970 ms] Received:  {"result":null}
[5993 ms] Received:  {"result":null}
[6013 ms] Received:  {"result":null}
[6034 ms] Received:  {"result":null}
[6076 ms] Received:  {"result":null}
[6099 ms] Received:  {"result":null}
[6119 ms] Received:  {"result":null}
[6142 ms] Received:  {"result":null}
[6165 ms] Received:  {"result":null}
[6183 ms] Received:  {"result":null}
[6207 ms] Received:  {"result":null}
[6227 ms] Received:  {"result":null}
[6248 ms] Received:  {"result":null}
[6269 ms] Received:  {"result":null}
[6290 ms] Received:  {"result":null}
[6380 ms] Received:  {"result":null}
[6430 ms] Received:  {"result":{"words":[],"speakers":[],"final_proc_time_ms":0,"total_proc_time_ms":3420,"channel":0}}
[6430 ms] Received:  {"result":null}
[6430 ms] Received:  {"result":null}
[6430 ms] Received:  {"result":null}
[6431 ms] Received:  {"result":null}
[6445 ms] Received:  {"result":null}
[6466 ms] Received:  {"result":null}
[6490 ms] Received:  {"result":null}
[6511 ms] Received:  {"result":null}
[6531 ms] Received:  {"result":null}
[6552 ms] Received:  {"result":null}
[6576 ms] Received:  {"result":null}
[6597 ms] Received:  {"result":null}
[6665 ms] Received:  {"result":{"words":[],"speakers":[],"final_proc_time_ms":1260,"total_proc_time_ms":5340,"channel":0}}
[6666 ms] Received:  {"result":null}
[6666 ms] Received:  {"result":null}
[6667 ms] Received:  {"result":null}
[6681 ms] Received:  {"result":null}
[6705 ms] Received:  {"result":null}
[6730 ms] Received:  {"result":null}
[6746 ms] Received:  {"result":null}
[6767 ms] Received:  {"result":null}
[6791 ms] Received:  {"result":null}
[6813 ms] Received:  {"result":null}
[6833 ms] Received:  {"result":null}
[6858 ms] Received:  {"result":null}
[6875 ms] Received:  {"result":null}
[6896 ms] Received:  {"result":null}
[6918 ms] Received:  {"result":null}
[6941 ms] Received:  {"result":null}
[6959 ms] Received:  {"result":null}
[6980 ms] Received:  {"result":null}
[7000 ms] Received:  {"result":null}
[7023 ms] Received:  {"result":null}
[7042 ms] Received:  {"result":null}
[7064 ms] Received:  {"result":null}
[7083 ms] Received:  {"result":null}
[7112 ms] Received:  {"result":null}
[7132 ms] Received:  {"result":null}
[7153 ms] Received:  {"result":null}
[7174 ms] Received:  {"result":null}
[7195 ms] Received:  {"result":null}
[7216 ms] Received:  {"result":null}
[7243 ms] Received:  {"result":null}
[7260 ms] Received:  {"result":null}
[7280 ms] Received:  {"result":null}
[7303 ms] Received:  {"result":null}
[7323 ms] Received:  {"result":null}
[7343 ms] Received:  {"result":null}
[7364 ms] Received:  {"result":null}
[7385 ms] Received:  {"result":null}
[7411 ms] Received:  {"result":null}
[7430 ms] Received:  {"result":null}
[7450 ms] Received:  {"result":null}
[7475 ms] Received:  {"result":null}
[7494 ms] Received:  {"result":null}
[7515 ms] Received:  {"result":null}
[7538 ms] Received:  {"result":null}
[7560 ms] Received:  {"result":null}
[7580 ms] Received:  {"result":null}
[7600 ms] Received:  {"result":null}
[7624 ms] Received:  {"result":null}
[7643 ms] Received:  {"result":null}
[7664 ms] Received:  {"result":null}
[7685 ms] Received:  {"result":null}
[7707 ms] Received:  {"result":null}
[7727 ms] Received:  {"result":null}
[7749 ms] Received:  {"result":null}
[7769 ms] Received:  {"result":null}
[7791 ms] Received:  {"result":null}
[7813 ms] Received:  {"result":null}
[7834 ms] Received:  {"result":null}
[7857 ms] Received:  {"result":null}
[7879 ms] Received:  {"result":null}
[7901 ms] Received:  {"result":null}
[7924 ms] Received:  {"result":null}
[7943 ms] Received:  {"result":null}
[7962 ms] Received:  {"result":null}
[7984 ms] Received:  {"result":null}
[8009 ms] Received:  {"result":null}
[8026 ms] Received:  {"result":null}
[8046 ms] Received:  {"result":null}
[8069 ms] Received:  {"result":null}
[8088 ms] Received:  {"result":null}
[8112 ms] Received:  {"result":null}
[8129 ms] Received:  {"result":null}
[8148 ms] Received:  {"result":null}
[8171 ms] Received:  {"result":null}
[8192 ms] Received:  {"result":null}
[8212 ms] Received:  {"result":null}
[8233 ms] Received:  {"result":null}
[8257 ms] Received:  {"result":null}
[8278 ms] Received:  {"result":null}
[8298 ms] Received:  {"result":null}
[8320 ms] Received:  {"result":null}
[8340 ms] Received:  {"result":null}
[8363 ms] Received:  {"result":null}
[8382 ms] Received:  {"result":null}
[8409 ms] Received:  {"result":null}
[8424 ms] Received:  {"result":null}
[8447 ms] Received:  {"result":null}
[8466 ms] Received:  {"result":null}
[8491 ms] Received:  {"result":null}
[8533 ms] Received:  {"result":null}
Total chunks sent: 400
[8552 ms] Received:  {"result":null}
[8573 ms] Received:  {"result":null}
[8805 ms] Received:  {"result":{"words":[],"speakers":[],"final_proc_time_ms":2760,"total_proc_time_ms":7260,"channel":0}}
[8950 ms] Received:  {"result":{"words":[{"text":"Is","start_ms":3360,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9785133134789241},{"text":"the","start_ms":3540,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.992914624769569},{"text":"needing","start_ms":3720,"duration_ms":180,"is_final":true,"speaker":0,"orig_text":"","confidence":0.7825312229017963},{"text":"tomorrow","start_ms":4080,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9986581276793751},{"text":"in","start_ms":4500,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.7832101344534589},{"text":"the","start_ms":4620,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9962533740736695},{"text":"green","start_ms":4860,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9995423410859292},{"text":"room","start_ms":5100,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9912343232514729},{"text":"or","start_ms":5520,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9950987205837319},{"text":"the","start_ms":5700,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9864211606099765},{"text":"red","start_ms":6000,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9886211427345235},{"text":"room","start_ms":6180,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.9370079834438084},{"text":".","start_ms":6780,"duration_ms":60,"is_final":true,"speaker":0,"orig_text":"","confidence":0.4266157770118886}],"speakers":[],"final_proc_time_ms":8160,"total_proc_time_ms":8160,"channel":0}}
Transcription completed.
```