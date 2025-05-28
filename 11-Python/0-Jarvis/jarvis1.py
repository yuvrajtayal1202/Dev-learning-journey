import speech_recognition as sr
import pyttsx3
import datetime
import webbrowser
import os
import subprocess
import platform
import wikipedia
import pyjokes
import pywhatkit
import time
import requests
import json
from bs4 import BeautifulSoup

# ======================
# INITIAL SETUP
# ======================

# Initialize speech engine
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)  # 0 for male, 1 for female
engine.setProperty('rate', 180)  # Speaking speed

# Initialize recognizer
recognizer = sr.Recognizer()

# ======================
# CORE FUNCTIONS
# ======================

def speak(text, print_text=True):
    """Convert text to speech"""
    if print_text:
        print(f"JARVIS: {text}")
    engine.say(text)
    engine.runAndWait()

def take_command(timeout=5):
    """Take voice command from user"""
    with sr.Microphone() as source:
        print("\nListening...")
        recognizer.adjust_for_ambient_noise(source)
        try:
            audio = recognizer.listen(source, timeout=timeout)
            print("Processing...")
            query = recognizer.recognize_google(audio).lower()
            print(f"USER: {query}")
            return query
        except sr.WaitTimeoutError:
            return ""
        except sr.UnknownValueError:
            speak("I didn't catch that. Could you repeat?")
            return ""
        except sr.RequestError:
            speak("Sorry, my speech service is down")
            return ""

def listen_for_wake_word(wake_word="jarvis", timeout=3):
    """Continuously listens for the wake word"""
    print(f"\nWaiting for wake word '{wake_word}'...")
    while True:
        with sr.Microphone() as source:
            try:
                audio = recognizer.listen(source, timeout=timeout)
                text = recognizer.recognize_google(audio).lower()
                if wake_word in text:
                    speak("Yes sir? How can I help you?")
                    return True
            except:
                pass
        time.sleep(0.1)  # Reduce CPU usage

# ======================
# TASK AUTOMATION FUNCTIONS
# ======================

def open_application(app_name):
    """Open applications by name"""
    app_map = {
        'chrome': r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        'notepad': 'notepad.exe',
        'calculator': 'calc.exe',
        'word': 'winword.exe',
        'excel': 'excel.exe',
        'powerpoint': 'powerpnt.exe'
    }
    
    try:
        if app_name in app_map:
            path = app_map[app_name]
            if os.path.exists(path):
                subprocess.Popen(path)
                speak(f"Opening {app_name}")
            else:
                speak(f"{app_name} not found at default location")
        else:
            speak(f"I don't know how to open {app_name}")
    except Exception as e:
        speak(f"Failed to open {app_name}")
        print(f"Error: {e}")

def search_web(query, site=None):
    """Search the web or specific sites"""
    search_engines = {
        'google': 'https://www.google.com/search?q=',
        'youtube': 'https://www.youtube.com/results?search_query=',
        'wikipedia': 'https://en.wikipedia.org/wiki/',
        'amazon': 'https://www.amazon.com/s?k='
    }
    
    try:
        if site and site in search_engines:
            url = search_engines[site] + query.replace(' ', '+')
            webbrowser.open(url)
            speak(f"Searching {site} for {query}")
        else:
            url = search_engines['google'] + query.replace(' ', '+')
            webbrowser.open(url)
            speak(f"Searching the web for {query}")
    except Exception as e:
        speak("Failed to perform web search")
        print(f"Error: {e}")

def system_control(command):
    """Control system functions"""
    system_os = platform.system().lower()
    
    try:
        if 'shutdown' in command:
            speak("Are you sure you want to shutdown the system?")
            confirm = take_command()
            if 'yes' in confirm:
                speak("Shutting down in 10 seconds")
                if system_os == 'windows':
                    os.system('shutdown /s /t 10')
                elif system_os == 'linux':
                    os.system('systemctl poweroff')
        
        elif 'restart' in command:
            speak("Are you sure you want to restart the system?")
            confirm = take_command()
            if 'yes' in confirm:
                speak("Restarting in 10 seconds")
                if system_os == 'windows':
                    os.system('shutdown /r /t 10')
                elif system_os == 'linux':
                    os.system('systemctl reboot')
                    
        elif 'sleep' in command:
            speak("Putting system to sleep")
            if system_os == 'windows':
                os.system('rundll32.exe powrprof.dll,SetSuspendState 0,1,0')
            elif system_os == 'linux':
                os.system('systemctl suspend')
                
    except Exception as e:
        speak("Failed to execute system command")
        print(f"Error: {e}")

def get_weather(city="New York"):
    """Get weather information"""
    try:
        api_key = "YOUR_API_KEY"  # Get from openweathermap.org
        base_url = "http://api.openweathermap.org/data/2.5/weather?"
        complete_url = f"{base_url}appid={api_key}&q={city}"
        
        response = requests.get(complete_url)
        data = response.json()
        
        if data["cod"] != "404":
            main = data["main"]
            temp = main["temp"] - 273.15  # Kelvin to Celsius
            humidity = main["humidity"]
            weather_desc = data["weather"][0]["description"]
            
            speak(f"Weather in {city}:")
            speak(f"Temperature: {temp:.1f}°C")
            speak(f"Humidity: {humidity}%")
            speak(f"Conditions: {weather_desc}")
        else:
            speak("City not found")
    except Exception as e:
        speak("Failed to get weather information")
        print(f"Error: {e}")

def get_news(topic="general", count=3):
    """Get news headlines"""
    try:
        news_api_key = "YOUR_API_KEY"  # Get from newsapi.org
        url = f"https://newsapi.org/v2/top-headlines?country=us&category={topic}&apiKey={news_api_key}"
        
        response = requests.get(url)
        data = response.json()
        
        if data["status"] == "ok":
            speak(f"Here are the latest {topic} news headlines")
            for article in data["articles"][:count]:
                speak(article["title"])
        else:
            speak("Could not fetch news at this time")
    except Exception as e:
        speak("Failed to get news updates")
        print(f"Error: {e}")

# ======================
# COMMAND PROCESSING
# ======================

def process_command(command):
    """Process user commands"""
    if not command:
        return
    
    # Basic interactions
    if any(word in command for word in ['hello', 'hi', 'hey']):
        responses = ["Hello sir!", "Good to see you!", "How can I help?"]
        speak(random.choice(responses))
        
    elif 'time' in command:
        current_time = datetime.datetime.now().strftime("%I:%M %p")
        speak(f"The current time is {current_time}")
        
    elif 'date' in command:
        current_date = datetime.datetime.now().strftime("%B %d, %Y")
        speak(f"Today's date is {current_date}")
        
    elif 'who are you' in command:
        speak("I am Jarvis, your personal AI assistant")
        
    # Application control
    elif 'open' in command:
        app = command.replace('open', '').strip()
        open_application(app)
        
    # Web searching
    elif 'search' in command:
        query = command.replace('search', '').strip()
        if 'on youtube' in query:
            search_web(query.replace('on youtube', ''), 'youtube')
        elif 'on wikipedia' in query:
            search_web(query.replace('on wikipedia', ''), 'wikipedia')
        elif 'on amazon' in query:
            search_web(query.replace('on amazon', ''), 'amazon')
        else:
            search_web(query)
            
    # Media control
    elif 'play' in command and 'youtube' not in command:
        song = command.replace('play', '').strip()
        speak(f"Playing {song} on YouTube")
        pywhatkit.playonyt(song)
        
    # Information
    elif 'wikipedia' in command:
        query = command.replace('wikipedia', '').strip()
        try:
            info = wikipedia.summary(query, sentences=2)
            speak("According to Wikipedia...")
            speak(info)
        except:
            speak("Sorry, I couldn't find information on that topic")
            
    elif 'weather' in command:
        city = command.replace('weather', '').replace('in', '').strip()
        if city:
            get_weather(city)
        else:
            get_weather()
            
    elif 'news' in command:
        topic = 'general'
        if 'sports' in command:
            topic = 'sports'
        elif 'technology' in command:
            topic = 'technology'
        elif 'business' in command:
            topic = 'business'
        get_news(topic)
        
    # Entertainment
    elif 'joke' in command:
        speak(pyjokes.get_joke())
        
    # System control
    elif any(word in command for word in ['shutdown', 'restart', 'sleep']):
        system_control(command)
        
    # Exit
    elif any(word in command for word in ['exit', 'quit', 'goodbye']):
        speak("Goodbye sir! Have a great day!")
        exit()
        
    else:
        speak("I didn't understand that command. Can you please repeat?")

# ======================
# MAIN EXECUTION
# ======================

if __name__ == "__main__":
    speak("Jarvis initialization complete. Systems are now operational.")
    
    while True:
        try:
            if listen_for_wake_word():
                command = take_command()
                process_command(command)
        except KeyboardInterrupt:
            speak("Shutting down Jarvis")
            break
        except Exception as e:
            print(f"Unexpected error: {e}")
            speak("Sorry, I encountered an error. Restarting my systems.")
            time.sleep(1)