import matplotlib.pyplot as plt, mpld3
import numpy as np
import json
import time
import urllib.request
import urllib
import re

"""name=input("Enter the stock name: ").lower()

import urllib.error

def fetch_html(url):
	try:
		with urllib.request.urlopen(url) as response:
			return response.read().decode("utf-8")
	except urllib.error.HTTPError as e:
		print(f"HTTP error: {e.code}")
	except urllib.error.URLError as e:
		print(f"URL error: {e.reason}")
	time.sleep(2)
	return fetch_html(url)

htmltext = fetch_html(f"https://www.nasdaq.com/market-activity/stocks/{name}/")
if htmltext is None:
	print("Failed to fetch data. Exiting.")
	exit()

regex = '<div class="nsdq-quote-header__pricing-information-saleprice">' 

pattern = re.compile(regex)

price = re.findall(pattern, htmltext)

print(price)"""



while True:
	date=[]
	stockclose=[]
	volume=[]
	stockopen=[]
	high=[]
	low=[]
	with open("aapl.csv", 'r') as file:#artefact\\aapl.csv is needed and I really don't know why it doesn't work.
		data = file.read()
		l1=data.split("\n")
		l1.pop()
		for i in range(len(l1)):
			l1[i]=l1[i].split(",")
		
		for i in range(1, len(l1)):
			date.append(l1[i][0].replace("/2025","").replace("/2024",""))
		date=date[::-1]

		for i in range(1, len(l1)):
			stockclose.append(float(l1[i][1].replace("$", "")))
			stockopen.append(float(l1[i][3].replace("$", "")))
		stockclose=stockclose[::-1]
		stockopen=stockopen[::-1]

		for i in range(1, len(l1)):
			volume.append(int(l1[i][2]))
		volume=volume[::-1]

		for i in range(1, len(l1)):
			high.append(float(l1[i][4].replace("$", "")))
		high=high[::-1]

		for i in range(1, len(l1)):
			low.append(float(l1[i][5].replace("$", "")))
		low=low[::-1]

		print(f"Date: {date},\n Stock Close: {stockclose},\n Volume: {volume},\n Stock Open: {stockopen},\n High: {high},\n Low: {low}")

	jsondict = {
		"Date": date,
		"Stock_Close": stockclose,
		"Volume": volume,
		"Stock_Open": stockopen,
		"High": high,
		"Low": low
	}
	json_object=json.dumps(jsondict, indent=4)

	with open("ui\\src\\data.json", "w") as outfile:
		outfile.write(json_object)
	#time-based graph
	x=np.array(date)
	y1=np.array(stockclose)
	y2=np.array(stockopen)
	y3=np.array(high)
	y4=np.array(low)
	graph=plt.figure()
	plt.xlabel("Date")
	plt.ylabel("Stock Price (USD)")
	plt.plot(x,y1, label="Stock Close", linestyle="-")
	plt.plot(x,y2, label="Stock Open", linestyle="--", color="red")
	plt.plot(x,y3, label="High", linestyle="-.")
	plt.plot(x,y4, label="Low", linestyle=":")
	def find_lowest_value(y):
		return np.argmin(y)
	lowindex=find_lowest_value(y1)
	def estimate_coefficient(x, y):
		n = np.size(x)
		m_x, m_y = np.mean(x), np.mean(y)
		SS_xy = np.sum(y*x) - n*m_y*m_x
		SS_xx = np.sum(x*x) - n*m_x*m_x
		b_1 = SS_xy / SS_xx
		b_0 = m_y - b_1*m_x
		return(b_0, b_1)

	def plotregressionline(x,y,b):
		print(f"Estimated coefficients:\nb_0 = {b[0]}\nb_1 = {b[1]}")
		plt.plot(x+y, b[0] + b[1]*x, color="green")

	plotregressionline(np.arange(len(x)), 0, estimate_coefficient(np.arange(len(x)),y1))
	plotregressionline(np.arange(len(x[lowindex:])),lowindex, estimate_coefficient(np.arange(len(x[lowindex:])),y1[lowindex:]))
	plt.legend(["Stock Close", "Stock Open", "High", "Low",  "Linear Regression Line", "Linear Regression Line (After Lowest Value)"])
	plt.show()
	time.sleep(3600)
#mpld3.save_json(plt.figure(graph),"artefact\\graph.json")