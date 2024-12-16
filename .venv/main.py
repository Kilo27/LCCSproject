from urllib.request import urlopen
import certifi
import json

def get_jsonparsed_data(url):
    response = urlopen(url, cafile=certifi.where())
    data = response.read().decode("utf-8")
    return json.loads(data)

tickercode="KRZ"

url = (f"https://financialmodelingprep.com/api/v3/quote/{tickercode}?apikey=HB0CyUa7I01Oaj8FsR3sy4kk2NovfzKf")
print(get_jsonparsed_data(url))