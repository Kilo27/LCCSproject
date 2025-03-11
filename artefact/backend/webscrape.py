import time
import requests
def postData(code):
	year = time.strftime("%Y")
	month = time.strftime("%m")
	day = time.strftime("%d")

	target_url = f"https://api.nasdaq.com/api/quote/{code}/historical?assetclass=stocks&fromdate=2025-01-01&limit=9999&todate={year}-{month}-{day}&random=6"

	headers = {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
	}

	response = requests.get(target_url, headers=headers)

	if response.status_code == 200:
		print("Data fetched successfully!")
		print(response.json())  # Print the JSON response
	else:
		print(f"Failed to fetch data. Status Code: {response.status_code}")

	with open("data.csv", "w") as file:
		for i in range(0, len(response.json()["data"]["tradesTable"]["rows"])):
			file.write(response.json()["data"]["tradesTable"]["rows"][i]["date"])
			file.write(",")
			file.write(str(response.json()["data"]["tradesTable"]["rows"][i]["open"]))
			file.write(",")
			file.write(str(response.json()["data"]["tradesTable"]["rows"][i]["high"]))
			file.write(",")
			file.write(str(response.json()["data"]["tradesTable"]["rows"][i]["low"]))
			file.write(",")
			file.write(str(response.json()["data"]["tradesTable"]["rows"][i]["close"]))
			file.write(",")
			file.write(str(response.json()["data"]["tradesTable"]["rows"][i]["volume"]))
			file.write("\n")
