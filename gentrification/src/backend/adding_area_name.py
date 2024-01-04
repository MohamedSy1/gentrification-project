import json


averageRentYear = open("./json_files/average_rent_year.json")
average_rent_year = json.load(averageRentYear)
# print(average_rent_year)

# I like to add the key-value for areaName, Borough, and coordinates as a new key in the averageRent
# I need to iterate through the averageRentYear array and get each individual object
# inside of each object I would like to add the areaName for medianAskingRent
# I have to iterate on both of the string at the same time in order to do so.

with open("./json_files/medianAskingRent_All.json") as medianAskingRent:
    median_asking_rent = json.load(medianAskingRent)
    print(median_asking_rent[0]["Coordinates"])
    for i, value in enumerate(average_rent_year):
        value["coordinates"] = []
        value["areaName"] = []
        value["Borough"] = []
        if value:
            value["coordinates"] = median_asking_rent[i]["Coordinates"]
            value["areaName"] = median_asking_rent[i]["areaName"]
            value["Borough"] = median_asking_rent[i]["Borough"]

        print(value["coordinates"])
        print(value["areaName"])
        print(value["Borough"])


    



with open("./json_files/real_output.json", "w") as file_json:
    json.dump(average_rent_year, file_json, indent=4)