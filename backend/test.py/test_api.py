import requests
response = requests.post(
    "http://127.0.0.1:5000/api/move",
    json={"board": ["X", "", "", "", "O", "", "", "", ""], "ai": "O"}
)

print(response.json())