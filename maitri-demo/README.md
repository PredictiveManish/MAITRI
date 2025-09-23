Updating with time


roadmap

## Setup for capturing Input
1. opencv for webcam feed
2. pyaudio or speechrecognition for mic input
- showing live video window + record short audio chunks (along proves multimodal input capture)


## Basic Emotions detection
- Facial Emotion Detection
1. use a pretrained model like FER+ or deepface
2. detects some emotions: happy, sad, angry, neutral

- speech emotion detection
1. OS models from speech-emotion-recognition library
2. classify emotions from short audio clips
(even if accuracy is not 100%, the demo works)

## Multimodal fusion 
- Simple rule-based fusion
1. if both models agree -> take that as final emotion
2. if they differ -> take average/prioritize audio
- Display detected emotion in real-time on screen

## Response generation 
- Predefine short supportive dialogues and use of Sarvam-API for basic answers (positive points for more indigeneous)
- show as text on screen and also use pyttsx3 (online TTS) to speak it aloud

## Alert system
- if sad/angry persists for >30sec -> print "Alert: Stress detected"
- simulate sending this alert (save in log file and popup)

