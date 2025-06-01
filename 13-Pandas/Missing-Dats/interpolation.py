import pandas as pd

data = {
    "Time": [1, 2, 3, 4, 5],
    "Value": [None,22, None,44,55]
}

df = pd.DataFrame(data)
print(df)


df['Value'] = df['Value'].interpolate(method="linear")
print(df)
