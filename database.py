import sqlite3

# Connect to SQLite Database
conn = sqlite3.connect("password_history.db")

cursor = conn.cursor()

# Create Table
cursor.execute("""
CREATE TABLE IF NOT EXISTS password_history (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    password_hash TEXT UNIQUE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)
""")

conn.commit()

conn.close()

print("Database created successfully.")