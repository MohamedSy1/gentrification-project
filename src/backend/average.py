import json
import csv

valuesOfyear = open('../json_files/valuesOfyear.json', 'r')
value_of_year = json.load(valuesOfyear)

for value in value_of_year:
    for year, prices in value.items():
        valid_prices = [float(price) for price in prices]
        avg = sum(valid_prices) / len(valid_prices) if valid_prices else 0
        value[year] = avg

with open("average_rent_year.json", "w") as file_json:
    json.dump(value_of_year, file_json, indent=4)