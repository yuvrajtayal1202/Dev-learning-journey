import pandas as pd

data = {
    "Name" : ['Ram', 'Shyam', "Gansh"],
    'Age' : [20,30,40],
    'city' : ['Nagpur', 'Mumbai', 'Delhi']
}

df = pd.DataFrame(data)
print(df)

df.to_excel('output.xlsx', index= False)