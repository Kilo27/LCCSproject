import time
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys

PATH=webdriver.ChromeService(executable_path="C:\\Program Files (x86)\\chromedriver-win64\\chromedriver.exe")
driver=webdriver.Chrome(service=PATH)

l1=list()
dict={}
targeturl="https://www.nasdaq.com/market-activity/stocks/aapl"
driver.get(targeturl)
from selenium.webdriver.common.by import By

html=driver.find_element(By.TAG_NAME, "html")
html.send_keys(Keys.END)
time.sleep(2)
resp=driver.page_source
driver.close()

try:
	cookie_button = driver.find_element(By.XPATH, '//button[text()="Accept"]')
	cookie_button.click()
	time.sleep(2)
except Exception as e:
	print("No cookie popup found or error occurred:", e)

soup=BeautifulSoup(resp, "html.parser")
try:
	dict["name"] = soup.find("div", {"class": "quote-header-section__asset-name"}).text.strip()
except:
	dict["name"]=None
try:
	dict["price"]=soup.find("span",{"class":"base    yf-ipw1h0"}).text
except:
	dict["price"]=None

print(dict)