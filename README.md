# API-Data-Display-With-Search
Fetch &amp; parse data from an API endpoint using python
![image](https://github.com/MiguelAngelHorta/API-Data-Display-With-Search/assets/106134627/b1e76700-a059-4fac-a6cd-1f2592a0108d)

## Functions
- fetchItems(): Fetches items from an API endpoint, parses the response as JSON, and then calls displayItems() to render the items on the page.
- displayItems(items): Clears the existing items list, iterates through each item, constructs HTML list items for each item with ID, name, description, and domain information, and appends the constructed list items to the items list on the page.
- clearSearch(): Clears input fields for search criteria and then calls fetchItems() to fetch and display all items again.
- performSearch(): Retrieves search terms from input fields, fetches items from the API endpoint, filters items based on search terms using regular expressions, and calls displayItems() to render the filtered items on the page.
