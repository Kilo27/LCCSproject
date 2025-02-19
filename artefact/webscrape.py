import time
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys

PATH="C:\Program Files (x86)\chromedriver.exe"
driver=webdriver.Chrome(PATH)

l1=list()
dict={}
targeturl="https://finance.yahoo.com/quote/AAPL/history?p=AAPL"
driver.get(targeturl)
html=driver.find_element_by_tag_name("html")
html.send_keys(Keys.END)
time.sleep(2)
resp=driver.page_source
driver.close()

soup=BeautifulSoup(resp, "html.parser")
try:
	dict["name"]=soup.find("h1",{"class":"yf-xxbei9"}).text
except:
	dict["name"]=None
try:
	dict["price"]=soup.find("span",{"class":"base    yf-ipw1h0"}).text
except:
	dict["price"]=None

print(dict)