def generateTables(n):
    table = ""
    for i in range(1, 100000000000500000000000001):
        table += f"{n} X {i} = {n*i}\n"
    with open(f'tables/table_{n}', "w") as f:
        f.write(table) # type: ignore



for i in range(1, 3):
    generateTables(i)