import matplotlib.pyplot as plt
import numpy as np
import json
from webscrape import postData
import sys
code = sys.argv[1].upper()
postData(code)

date=[]
stockclose=[]
volume=[]
stockopen=[]
high=[]
low=[]
with open("data.csv", 'r') as file:#artefact\\aapl.csv is needed and I really don't know why it doesn't work.
	data = file.read()
	l1=data.split("\n")
	l1.pop()
	for i in range(len(l1)):
		l1[i]=l1[i].split(",")
	
	for i in range(1, len(l1)):
		date.append(l1[i][0].replace("/2025","").replace("/2024",""))
	date=date[::-1]

	for i in range(1, len(l1)):
		stockclose.append(float(l1[i][4].replace("$", "")))
		stockopen.append(float(l1[i][1].replace("$", "")))
	stockclose=stockclose[::-1]
	stockopen=stockopen[::-1]

	for i in range(1, len(l1)):
		volume.append(int(l1[i][5].replace(",", "")))
	volume=volume[::-1]

	for i in range(1, len(l1)):
		high.append(float(l1[i][2].replace("$", "")))
	high=high[::-1]

	for i in range(1, len(l1)):
		low.append(float(l1[i][3].replace("$", "")))
	low=low[::-1]

	print(f"Date: {date},\n Stock Close: {stockclose},\n Volume: {volume},\n Stock Open: {stockopen},\n High: {high},\n Low: {low}")


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
	if m_x == 0:
		return (0,0)
	SS_xy = np.sum(y*x) - n*m_y*m_x
	SS_xx = np.sum(x*x) - n*m_x*m_x
	m = SS_xy / SS_xx
	c = m_y - m*m_x
	return(c, m)#for equation y=mx+c where m is the slope and c is the point of intersection on the y-axis

def plotregressionline(x,y,b):
	print(f"Estimated coefficients:\nc = {b[0]}\nm = {b[1]}")
	plt.plot(x+y, b[0] + b[1]*x, color="green")

regtotal=estimate_coefficient(np.arange(len(x)),y1)
regfromlowest=estimate_coefficient(np.arange(len(x[lowindex:])),y1[lowindex:])
regfromlastseven=estimate_coefficient(np.arange(len(x[-7:])), y1[-7:])
lowest_last_seven_index = np.argmin(y1[-7:])
regfromlowestlastseven = estimate_coefficient(np.arange(len(x[-7 + lowest_last_seven_index:])), y1[-7 + lowest_last_seven_index:])
[plotregressionline(np.arange(len(x)), 0, regtotal) if regtotal[1] != 0 else None]
[plotregressionline(np.arange(len(x[lowindex:])),lowindex, regfromlowest) if regfromlowest[1] != 0 else None]
[plotregressionline(np.arange(len(x[-7:])), len(x)-7, regfromlastseven) if regfromlastseven[1] != 0 else None]
[plotregressionline(np.arange(len(x[-7 + lowest_last_seven_index:])), len(x)-7 + lowest_last_seven_index, regfromlowestlastseven) if regfromlowestlastseven[1] != 0 else None]
plt.legend(["Stock Close", "Stock Open", "High", "Low",  "Linear Regression Line", "Linear Regression Line (After Lowest Value)", "Linear Regression Line (Last 7 Days)", "Linear Regression Line (Last 7 Days After Lowest Value)"])
plt.title("Stock Price Over Time")
meanreg_values = [regtotal[1], 0.5*regfromlowest[1], regfromlastseven[1],0.5* regfromlowestlastseven[1]]
meanreg_values = [value for value in meanreg_values if value != 0]
if meanreg_values:
	meanreg = round(sum(meanreg_values) / len(meanreg_values), 2)
else:
	meanreg = 0
print(meanreg)
valueoverweek=round(meanreg*7+y1[-1],2)
print(valueoverweek)

jsondict = {
	"Date": date,
	"Stock_Close": stockclose,
	"Volume": volume,
	"Stock_Open": stockopen,
	"High": high,
	"Low": low,
	"Mean_Regression": meanreg,
	"Final_Value": valueoverweek
}

json_object=json.dumps(jsondict, indent=4)

with open("..\\ui\\src\\data.json", "w") as outfile:
	outfile.write(json_object)
