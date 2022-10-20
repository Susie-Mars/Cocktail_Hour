from flask import Flask
DATABASE = "users_cocktails"
app= Flask(__name__)
app.secret_key = "Our secret!"

