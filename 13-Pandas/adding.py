import pandas as pd

data = {
    "Name": ['Ram', 'Ram1', 'Ram2', 'Ram3', 'Ram4' ],
    "Age": [20,25,24,23,42],
    "Salary": [11,22,33,44,55]
}

df = pd.DataFrame(data)

df['bonus'] = df['Salary'] * 0.1
print(df)

df.insert(0, 'ID', [1,2,3,4,5])
print(df)