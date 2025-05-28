import speech_recognition as sr
import pyttsx3
import pywhatkit
import wikipedia
import pyjokes
import datetime
import time

# Initialize text-to-speech engine
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)  # 0 for male, 1 for female voice

def speak(text):
    """Convert text to speech"""
    engine.say(text)
    engine.runAndWait()
def take_command():
    """Take voice command from user"""
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.pause_threshold = 1
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
    try:
        print("Recognizing...")
        query = recognizer.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")
    except Exception:
        print("Say that again please...")
        return "None"
    return query.lower().strip()

def run_jarvis():
    """Main function to run Jarvis"""
    speak("Hello, I am Jarvis. How can I help you?")
    while True:
        query = take_command()
        if query == "None":
            continue
        if 'hello' in query:
            speak("Hello there!")
        elif 'play' in query:
            song = query.replace('play', '')
            speak(f'Playing {song}')
            pywhatkit.playonyt(song)
        elif 'time' in query:
            time = datetime.datetime.now().strftime('%I:%M %p')
            speak(f'Current time is {time}')
        elif 'wikipedia' in query:
            speak('Searching Wikipedia...')
            query = query.replace("wikipedia", "")
            try:
                results = wikipedia.summary(query, sentences=2)
                speak("According to Wikipedia")
                speak(results)
            except Exception:
                speak("Sorry, I couldn't find any results on Wikipedia.")
        elif 'joke' in query:
            speak(pyjokes.get_joke())
        elif 'exit' in query or 'stop' in query:
            speak("Goodbye!")
            listen_for_wake_word()
            break
        elif 'sleep' in query:
            speak("I am There For you!")
            listen_for_wake_word() == False
            # break
        else:
            speak("I didn't understand that. Can you please repeat?")

def listen_for_wake_word(wake_word="jarvis"):
    """Continuously listens for the wake word"""
    recognizer = sr.Recognizer()
    source = sr.Microphone()
    
    with source:
        recognizer.adjust_for_ambient_noise(source)  # Reduce background noise
        
    print(f"Waiting for wake word '{wake_word}'...")
    
    while True:
        try:
            with source:
                audio = recognizer.listen(source, phrase_time_limit=3)
            
            # Recognize speech using Google's speech recognition
            text = recognizer.recognize_google(audio).lower()
            print(text)
            if wake_word in text:
                print(f"Wake word '{wake_word}' detected!")
                # speak("Yes sir? How can I help you?")
                return True
                
        except sr.UnknownValueError:
            pass  # No speech detected
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            
        time.sleep(0.1)  # Small delay to reduce CPU usage


if __name__ == "__main__":
    if listen_for_wake_word():
      run_jarvis()