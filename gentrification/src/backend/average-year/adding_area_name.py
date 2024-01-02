import json


averageRentYear = open("average_rent_year.json")
average_rent_year = json.load(averageRentYear)
print(average_rent_year)

with open("../medianAskingRent_All.json") as medianAskingRent:
    median_asking_rent = json.load(medianAskingRent)
   
    for i, hood in enumerate(median_asking_rent):
        average_rent_year[str(i)]["areaName"] = hood["areaName"]
        average_rent_year[str(i)]["coordinate"] = hood["Coordinates"]
        average_rent_year[str(i)]["Borough"] = hood["Borough"]



with open("real_output.json", "w") as file_json:
    json.dump(average_rent_year, file_json, indent=4)