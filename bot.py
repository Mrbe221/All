import requests
import time
import threading

PAGE_ACCESS_TOKEN = "YOUR_PAGE_ACCESS_TOKEN"
COOKIE = "YOUR_COOKIE"

sending_stickers = False
sending_msgs = False

def send_message(recipient_id, message_text):
    url = f"https://graph.facebook.com/v11.0/me/messages?access_token={PAGE_ACCESS_TOKEN}"
    headers = {
        "Content-Type": "application/json",
        "Cookie": COOKIE,
    }
    data = {
        "recipient": {"id": recipient_id},
        "message": {"text": message_text}
    }
    response = requests.post(url, json=data, headers=headers)
    print(response.json())

def send_sticker(recipient_id, sticker_id):
    url = f"https://graph.facebook.com/v11.0/me/messages?access_token={PAGE_ACCESS_TOKEN}"
    headers = {
        "Content-Type": "application/json",
        "Cookie": COOKIE,
    }
    data = {
        "recipient": {"id": recipient_id},
        "message": {"sticker_id": sticker_id}
    }
    response = requests.post(url, json=data, headers=headers)
    print(response.json())

def start_sending_stickers(recipient_id):
    global sending_stickers
    sending_stickers = True
    print("Sticker sending started! Use 'stop' to stop.")

    def send_stickers():
        while sending_stickers:
            send_sticker(recipient_id, '369239263222822')  # Example sticker_id, replace as needed
            time.sleep(2)

    threading.Thread(target=send_stickers).start()

def start_sending_msgs(recipient_id):
    global sending_msgs
    sending_msgs = True
    print("Message sending started! Use 'stop' to stop.")

    def send_messages():
        while sending_msgs:
            send_message(recipient_id, 'This is a test message.')
            time.sleep(2)

    threading.Thread(target=send_messages).start()

def stop_sending():
    global sending_stickers, sending_msgs
    sending_stickers = False
    sending_msgs = False
    print("Sending stopped!")

def main():
    recipient_id = input("Enter recipient ID: ")
    while True:
        command = input("Enter command (sendsticker, sendmsg, stop): ")
        if command == "sendsticker":
            start_sending_stickers(recipient_id)
        elif command == "sendmsg":
            start_sending_msgs(recipient_id)
        elif command == "stop":
            stop_sending()
        else:
            print("Invalid command.")

if __name__ == '__main__':
    main()
