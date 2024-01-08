import pandas as pd
from geopy.geocoders import Nominatim
import re
import json
import csv

def findAddress(address):
    geolocator = Nominatim(user_agent="bananaeater")
    location = geolocator.geocode(address)

    if location:
        return [location.latitude, location.longitude]
    return None

# Read addresses from Excel file into a pandas DataFrame

df = pd.read_excel("address.xlsx", header=None, names=["Address"])
address_list = list(df["Address"])

new_list = [{"Address": address, "City": "New York", "Country": "United States"} for address in address_list]

# Iterate through the new_list and find coordinates for each address

for entry in new_list:
    coordinates = findAddress(entry["Address"])
    entry["Coordinates"] = coordinates if coordinates else "None"

json_dict = {"data": []}

with open("./raw_data/medianAskingRent_All.csv", "r") as medianAskingRent:
    median_asking_rent = csv.DictReader(medianAskingRent)

    coordinates_list = [coord["Coordinates"] for coord in new_list]

    for index, row in enumerate(median_asking_rent):
        area_name = row["areaName"]

        coordinates = coordinates_list[index] if index < len(coordinates_list) else None
        
        row["Coordinates"] = coordinates

        json_dict["data"].append(row)
with open("medianAskingRent_All.json", "w") as json_file:
    json.dump(json_dict, json_file, indent = 4)