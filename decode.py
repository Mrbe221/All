import os

# Define ANSI color codes
RED = "\033[31m"
GREEN = "\033[32m"
YELLOW = "\033[33m"
BLUE = "\033[34m"
MAGENTA = "\033[35m"
CYAN = "\033[36m"
RESET = "\033[0m"

logo = f"""
{RED}██████╗ {GREEN}███████╗{YELLOW}██╗   ██╗{BLUE}██╗{MAGENTA}██╗     
{RED}██╔══██╗{GREEN}██╔════╝{YELLOW}██║   ██║{BLUE}██║{MAGENTA}██║     
{RED}██║  ██║{GREEN}█████╗  {YELLOW}██║   ██║{BLUE}██║{MAGENTA}██║     
{RED}██║  ██║{GREEN}██╔══╝  {YELLOW}╚██╗ ██╔╝{BLUE}██║{MAGENTA}██║     
{RED}██████╔╝{GREEN}███████╗ {YELLOW}╚████╔╝ {BLUE}██║{MAGENTA}███████╗
{RED}╚═════╝ {GREEN}╚══════╝  {YELLOW}╚═══╝  {BLUE}╚═╝{MAGENTA}╚══════╝
{RESET}
"""

def Hassan():
    os.system("clear")
    print(logo)
    print("[A] Decode Zlib \n[B] Decode Base64")
    choice = input("[✓] input: ")
    dec()

def dec():
    os.system("clear")
    print(logo)
    print(" Example file_enc.py")
    file = input(" input file: ")
    ogge = str(open(file, "r").read())
    data = ogge.replace("exec", "MrDevilEx=")
    data2 = f"""{data}\nopen("Fuck_done.py","w").write(MrDevilEx.decode('utf-8')) """
    open(".dara.py", "w").write(data2)
    os.system("python .dara.py")
    print(" file saved with Fuck_done.py")
    print(" Dec done [✓] ")

Hassan()