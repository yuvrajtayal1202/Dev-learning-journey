import pandas as pd

data = {
    "Name": ['Ram', None, 'Ram2', 'Ram3', 'Ram4' ],
    "Age": [20,25,24,23,42],
    "Salary": [11,22,33,44,55]
}

df = pd.DataFrame(data)
print(df)


print(df.isnull())
