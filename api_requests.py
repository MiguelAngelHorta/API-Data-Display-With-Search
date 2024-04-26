import requests

def fetch_data(api_url):
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an exception for bad status codes
        return response.json()  # Parse JSON response
    except requests.exceptions.RequestException as e:
        print("Error fetching data:", e)
        return None

def parse_data(data):
    if data is None:
        return None
    
    parsed_data = []
    for item in data:
        parsed_item = {
            'id': item.get('mainID'),  # Adjust field names to match the API data
            'name': item.get('mainDescription'),
            'description': item.get('scope'),
            'domain': item.get('domain')
        }
        parsed_data.append(parsed_item)
    
    return parsed_data

def main():
    api_url = "https://9ookpuq4tk.execute-api.us-east-1.amazonaws.com/prod/items"
    data = fetch_data(api_url)
    if data:
        parsed_data = parse_data(data)
        print(parsed_data)
    else:
        print("Failed to fetch data.")

if __name__ == "__main__":
    main()
