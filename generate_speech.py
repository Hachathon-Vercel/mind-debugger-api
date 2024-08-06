# generate_speech.py
from gtts import gTTS
import sys
import os

def generate_speech(text, output):
    try:
        output_path = os.path.abspath(output)
        print(f"Saving to: {output_path}")
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        tts = gTTS(text=text, lang='es')
        tts.save(output_path)
        print("Audio saved successfully")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python generate_speech.py '<text>' '<output_file_path>'")
    else:
        text = sys.argv[1]
        output = sys.argv[2]
        generate_speech(text, output)
