import csv
import json
import pandas as pd
import smartystreets_python_sdk as smarty
import os
from smartystreets_python_sdk import SharedCredentials, StaticCredentials, exceptions, ClientBuilder
from smartystreets_python_sdk.us_street import Lookup as StreetLookup
from smartystreets_python_sdk.us_street.match_type import MatchType

# Read address data
df = pd.read_excel("address.xlsx", header=None, names=["Address"])
address_list = list(df["Address"])

json_dict = {"data": []}

def run():
    # Correctly defined credentials for StaticCredentials
    auth_id = "1189bc01-9cec-a6b4-0d8d-fcf7b689a796"
    auth_token = "aNIdzKI7JiyNb0SryY1S"

    credentials = StaticCredentials(auth_id, auth_token)
    client = smarty.ClientBuilder(credentials).build_us_street_api_client()

    with open("medianAskingRent_All.csv", newline='') as medianAskingRent_All:
        medianAskingRent = csv.DictReader(medianAskingRent_All)
    
        for row in medianAskingRent:
            lookup = StreetLookup()
            lookup.street = row['areaName']  # Set the street to the current address

            try:
                client.send_lookup(lookup)
                if lookup.result:
                    # Process each matching address found
                    for candidate in lookup.result:
                        # Replace areaName with latitude and longitude
                        row['areaName'] = f"{row['areaName']} ({candidate.metadata.latitude}, {candidate.metadata.longitude})"
                else:
                    print(f"No results found for address: {row['areaName']}")

            except exceptions.SmartyException as err:
                print(err)

            json_dict["data"].append(row)

    # Write the resulting data to a JSON file
    with open('output.json', 'w') as f:
        json.dump(json_dict, f, indent=4)

run()