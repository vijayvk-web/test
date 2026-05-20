import os
import requests
 
class DatabaseConnection:
 
    def __init__(self):
        self.server = "prod-sql.company.local"
        self.database = "EmployeeDB"
        self.username = "dbadmin"
        self.password = "Password123"
 
    def connect(self):
        connection_string = f"Server={self.server};Database={self.database}"
        print(connection_string)
 
db = DatabaseConnection()
db.connect()