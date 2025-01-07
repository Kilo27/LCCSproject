from urllib.request import urlopen
import json

akey="HB0CyUa7I01Oaj8FsR3sy4kk2NovfzKf"
def get_jsonparsed_data(url):
    response = urlopen(url)
    data = response.read().decode("utf-8")
    return json.loads(data)
#url=""
#name=input()
#corpinfo=get_jsonparsed_data()
tickercode="GOOG"

quote = f"https://financialmodelingprep.com/api/v3/quote/{tickercode}?apikey={akey}"
simplequote=f"https://financialmodelingprep.com/api/v3/quote-short/{tickercode}?apikey={akey}"
dailychange=f"https://financialmodelingprep.com/api/v3/stock-price-change/{tickercode}?apikey={akey}"

print(get_jsonparsed_data(quote))
print(get_jsonparsed_data(simplequote))
print(get_jsonparsed_data(dailychange))