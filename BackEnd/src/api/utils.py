import requests
from requests_oauthlib import OAuth2Session
from oauthlib.oauth2 import BackendApplicationClient
from flask import current_app

print("utils.py is being imported...")

def get_oauth_token():
    client_id = current_app.config['CLIENT_ID']
    client_secret = current_app.config['CLIENT_SECRET']
    
    # Setează clientul pentru aplicația backend
    client = BackendApplicationClient(client_id=client_id)
    oauth = OAuth2Session(client=client)

    # Obține token-ul
    token_url = "https://identity.dataspace.copernicus.eu/auth/realms/CDSE/protocol/openid-connect/token"
    try:
        token = oauth.fetch_token(token_url=token_url, client_id=client_id, client_secret=client_secret)
        return token['access_token']
    except Exception as e:
        print(f"Failed to obtain OAuth token: {e}")
        return None

def fetch_copernicus_data():
    token = get_oauth_token()
    if not token:
        return {"error": "Failed to obtain OAuth token"}

    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }

    # URL pentru endpoint-ul de căutare al Sentinel-5P
    url = "https://sh.dataspace.copernicus.eu/api/v1/catalog/1.0.0/search"
    
    # Parametri pentru cererea API
    data = {
        "bbox": [13, 45, 14, 46],  # Exemplu de coordonate
        "datetime": "2023-01-01T00:00:00Z/2023-12-31T23:59:59Z",  # Interval de timp
        "collections": ["sentinel-5p-l2"],  # Colecția pentru datele Sentinel-5P
        "limit": 5  # Numărul maxim de rezultate
    }
    

    try:
        # Efectuează cererea POST
        response = requests.post(url, headers=headers, json=data)
        # print(f"Response status code: {response.status_code}")
        # print(f"Response text: {response.text}")
        
        if response.status_code == 200:
            response_data = response.json()
            features = response_data.get("features", [])
            return features  # Returnează lista de date legate de CO
        else:
            return {"error": f"Failed to fetch data from Copernicus API: {response.status_code}"}
    except Exception as e:
        return {"error": f"Exception occurred: {str(e)}"}
