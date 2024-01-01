import pandas as pd
import csv
import xlsxwriter


address_list = []
workbook = xlsxwriter.Workbook("address.xlsx")
worksheet = workbook.add_worksheet("firstSheet")

with open("medianAskingRent_All.csv", encoding="utf-8") as medianAskingRent:
    median_asking_rent = csv.DictReader(medianAskingRent)
    for index, row in enumerate(median_asking_rent):
        full_address = row["Borough"] + ", " + row["areaName"]
        worksheet.write(index, 0, full_address)


workbook.close()




