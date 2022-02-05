import pandas as pd
import json

df = pd.read_csv('data.csv')

data = {}
for i in range(30):
    data[i] = {}
    data[i]['name'] = df.iloc[i]['Name']
    data[i]['latitude'] = df.iloc[i]['Latitude']
    data[i]['longitude'] = df.iloc[i]['Longitude']
    data[i]['covid'] = int(df.iloc[i]['covid'])
    data[i]['non-covid'] = int(df.iloc[i]['non-covid'])
    data[i]['masks'] = int(df.iloc[i]['masks'])
    data[i]['ventilators'] = int(df.iloc[i]['ventilators'])



f = open("data.json", "w")
json.dump(data, f)
f.close()