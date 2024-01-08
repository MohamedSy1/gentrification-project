import json

averageRentYear = open("./json_files/average_rent_year.json")
average_rent_year = json.load(averageRentYear)

with open("./json_files/medianAskingRent_All.json") as medianAskingRent:
    median_asking_rent = json.load(medianAskingRent)

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