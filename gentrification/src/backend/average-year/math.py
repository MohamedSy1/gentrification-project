import json


def validYear(str_):
    return str_[:4].isnumeric()


hm = {}    

with open('../medianAskingRent_All.json', 'r') as medianAskingRent:

    median_asking_rent = json.load(medianAskingRent)

    for i in range(len(median_asking_rent)):
        for year, value in median_asking_rent[i].items():
            if value == "":
                value = 0
            if i in hm:
                if validYear(year):

                    if year[:4] in hm[i]:
                        hm[i][year[:4]].append(value)
                    else:
                        hm[i][year[:4]] = []
            else:
                hm[i] = {}


    dp = json.dumps(hm)
    open('valuesOfyear.json','w').write(dp)


