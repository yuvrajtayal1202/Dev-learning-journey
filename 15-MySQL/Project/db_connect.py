import mysql.connector

# Step 1: Create the database if not exists
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Yuvraj@1202#"
)
cursor = db.cursor()
cursor.execute("CREATE DATABASE IF NOT EXISTS testdb")
cursor.close()
db.close()

# Step 2: Connect to the testdb using a multi-statement-capable cursor
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Yuvraj@1202#",
    database="testdb"
)

# Use buffered cursor that supports multiple statements
cursor = db.cursor(buffered=True)

# Step 3: Read and execute full SQL file manually splitting by semicolon
with open("testDB.sql", "r") as file:
    sql_script = file.read()

statements = sql_script.strip().split(';')

for statement in statements:
    stmt = statement.strip()
    if stmt:
        try:
            cursor.execute(stmt)
        except Exception as e:
            print(f"Error executing:\n{stmt}\n{e}")

db.commit()

# Step 4: Show current data in users table
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
print("\nUsers table contents:")
for row in rows:
    print(row)

cursor.close()
db.close()
