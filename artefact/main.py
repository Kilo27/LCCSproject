from urllib.request import urlopen
import json
import time

akey="HB0CyUa7I01Oaj8FsR3sy4kk2NovfzKf"
otherakey="a3d65b6e16f2672529ff996d85d98188"
def get_jsonparsed_data(url):
    response = urlopen(url)
    data = response.read().decode("utf-8")
    return json.loads(data)
#url=""
#name=input()
#corpinfo=get_jsonparsed_data()
tickercode="GOOG"


#quote = f"https://financialmodelingprep.com/api/v3/quote/{tickercode}?apikey={akey}"
#simplequote=f"https://financialmodelingprep.com/api/v3/quote-short/{tickercode}?apikey={akey}"
#dailychange=f"https://financialmodelingprep.com/api/v3/stock-price-change/{tickercode}?apikey={akey}"
#pastcloses=f"https://financialmodelingprep.com/api/v4/batch-historical-eod?date=2021-05-18/{tickercode}?apikey={akey}"

pastinfo=f"https://api.marketstack.com/v1/eod?access_key={otherakey}&symbols={tickercode}"
print(f"https://api.marketstack.com/v1/eod?access_key={otherakey}&symbols={tickercode}")

print(get_jsonparsed_data(pastinfo))
print(time.asctime())