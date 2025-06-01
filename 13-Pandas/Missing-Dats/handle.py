import pandas as pd

data = {
    "Name": ['Ram', 'Ram1', 'Ram2', 'Ram3', 'Ram4' ],
    "Age": [20,25,24,None,42],
    "Salary": [11,22,33,44,55]
}

df = pd.DataFrame(data)
print(df)

df.dropna(inplace=True)
print(df)