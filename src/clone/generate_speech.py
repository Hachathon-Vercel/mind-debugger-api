# generate_speech.py
from gtts import gTTS
import sys

def generate_speech(text, output):
    tts = gTTS(text=text, lang='es')
    tts.save(output)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python generate_speech.py '<text>' '<output_file_path>'")
    else:
        text = sys.argv[1]
        output = sys.argv[2]
        generate_speech(text, output)
