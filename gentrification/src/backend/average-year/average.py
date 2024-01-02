import json
import csv

valuesOfyear = open('valuesOfyear.json', 'r')
value_of_year = json.load(valuesOfyear)

def avgNum(list_of_price):
    if list_of_price:
        return sum(list_of_price) / len(list_of_price)
    return 0


for (key, value) in value_of_year.items():
    # print(key)
    # print(key)
    for (year, prices) in value.items():

        val = []
        for price in prices:
            if price or price == 0:  
                val.append(float(price))
        
        avg = avgNum(val)
        value_of_year[key][year] = avg


with open("average_rent_year.json", "w") as file_json:
    json.dump(value_of_year, file_json, indent=4)


