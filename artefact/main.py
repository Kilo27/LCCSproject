import csv
import matplotlib.pyplot as plt
import numpy as np

date=[]
stockclose=[]
Volume=[]
stockopen=[]
high=[]
low=[]
with open ("artefact\\aapl.csv", 'r') as file:
    data = file.read()
    l1=data.split("\n")
    l1.pop()
    for i in range(len(l1)):
        l1[i]=l1[i].split(",")
    for i in range(1, len(l1)):
        date.append(l1[i][0])
    for i in range(1, len(l1)):
        stockclose.append(float(l1[i][1].replace("$", "")))
    for i in range(1, len(l1)):
        Volume.append(int(l1[i][2]))
    for i in range(1, len(l1)):
        stockopen.append(float(l1[i][3].replace("$", "")))
    for i in range(1, len(l1)):
        high.append(float(l1[i][1].replace("$", "")))
    for i in range(1, len(l1)):
        low.append(float(l1[i][1].replace("$", "")))
    print(f"Date: {date}, Stock Close: {stockclose}, Volume: {Volume}, Stock Open: {stockopen}, High: {high}, Low: {low}")

#closing data graph
x=np.array(date)
y1=np.array(stockclose)
y2=np.array(stockopen)
y3=np.array(high)
y4=np.array(low)
plt.xlabel("Date")
plt.plot(x,y1, label="Stock Close", linestyle="-")
plt.plot(x,y2, label="Stock Open", linestyle="--", color="red")
plt.plot(x,y3, label="High", linestyle="-.")
plt.plot(x,y4, label="Low", linestyle=":")
plt.show()