import csv
import json


json_dict = {}
with open("medianAskingPrice_All.csv") as medianAskingPrice_All:
    medianAskingPrice = csv.DictReader(medianAskingPrice_All)
    json_dict["data"] = []
    
    for row in medianAskingPrice:
        print(row)
        json_dict["data"].append(row)

    medianAskingPrice_All.close()

with open("medianAskingPrice_All.json", 'w') as json_file:
    json_file.write(json.dumps(json_dict, indent = 4))
    
    json_file.close()

