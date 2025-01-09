from urllib.request import urlopen
import json
import time
import requests

akey="HB0CyUa7I01Oaj8FsR3sy4kk2NovfzKf"
otherakey="a3d65b6e16f2672529ff996d85d98188"
def get_jsonparsed_data(url):
        with urlopen(url) as url:
            data = json.load(url)
            return data
tickercode="GOOG"

pastinfo=f"https://api.marketstack.com/v1/eod?access_key={otherakey}&symbols={tickercode}"
print(f"https://api.marketstack.com/v1/eod?access_key={otherakey}&symbols={tickercode}")

#print(get_jsonparsed_data(pastinfo))
print(time.asctime())


link = "https://api.marketstack.com/v1/eod?access_key={otherakey}&symbols={tickercode}"
f = requests.get(link)
print(f)