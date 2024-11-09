import json
import time
from fbchat import Client
from fbchat.models import Message, Sticker, ThreadType
from prompt_toolkit import prompt
from prompt_toolkit.validation import Validator, ValidationError
from colorama import Fore, Style
import sys
import os

class StickerIDsValidator(Validator):
    def validate(self, document):
        try:
            with open(document.text, 'r') as f:
                lines = f.readlines()
                if not lines:
                    raise ValidationError(message='File is empty', cursor_position=len(document.text))
        except Exception as e:
            raise ValidationError(message=f'Invalid file path: {e}', cursor_position=len(document.text))

def main():
    # Clear terminal screen
    os.system('cls' if os.name == 'nt' else 'clear')
    
    cookies_json = prompt(' [+] Enter Json Cookie File :: ')
    target_id = prompt(' [+] Enter Thread ID :: ')
    sticker_ids_path = prompt(' [+] Enter Stickers Ids File :: ', validator=StickerIDsValidator())
    timer = float(prompt(' [+] Enter Delay (second) :: '))

    with open(cookies_json, 'r') as f:
        cookies_dict = json.load(f)

    with open(sticker_ids_path, 'r') as f:
        sticker_ids = [line.strip() for line in f if line.strip()]

    client = Client('', '', session_cookies=cookies_dict)

    # Fetch user info to get real name
    user_info = client.fetchUserInfo(target_id)
    real_name = user_info[target_id].name

    def send_sticker():
        nonlocal current_index
        if current_index >= len(sticker_ids):
            print(Fore.RED + 'No more stickers to send.' + Style.RESET_ALL)
            return

        sticker_id = sticker_ids[current_index]
        try:
            client.send(Message(sticker=Sticker(sticker_id)), thread_id=target_id, thread_type=ThreadType.USER)
            now = time.strftime("%d-%m-%Y %I:%M:%S %p", time.localtime())
            print()
            print(Fore.GREEN + f' [•] Kidx Account Name :: {real_name}')
            print(Fore.GREEN + f' [√] Sticker sent to successfully :: {sticker_id} ')
            print(Fore.GREEN + f' [√] Sahii Hain :: ==> {now}')
        except Exception as e:
            print(Fore.RED + f'Error sending sticker: {e}' + Style.RESET_ALL)
        
        current_index = (current_index + 1) % len(sticker_ids)

    current_index = 0
    while True:
        try:
            send_sticker()
            time.sleep(timer)
        except KeyboardInterrupt:
            print(Fore.YELLOW + "Script interrupted by user. Exiting..." + Style.RESET_ALL)
            sys.exit(0)
        except Exception as e:
            print(Fore.RED + f'Unhandled exception: {e}' + Style.RESET_ALL)
            time.sleep(5)  # Wait for 5 seconds before retrying

if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print(Fore.RED + f'Unhandled exception: {e}' + Style.RESET_ALL)