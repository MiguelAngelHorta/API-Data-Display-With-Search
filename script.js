document.addEventListener("DOMContentLoaded", function() {
    const itemsList = document.getElementById("items-list");
    const clearSearchBtn = document.getElementById("clear-search");

    // Fetch items and display on page load
    fetchItems();

    function fetchItems() {
        fetch("https://9ookpuq4tk.execute-api.us-east-1.amazonaws.com/prod/items")
            .then(response => response.json())
            .then(data => displayItems(data))
            .catch(error => console.error("Error fetching items:", error));
    }

    function displayItems(items) {
        itemsList.innerHTML = ""; // Clear previous items

        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>ID:</strong> ${item.mainID}<br>
                <strong>Name:</strong> ${item.mainDescription}<br>
                <strong>Description:</strong> ${item.scope}<br>
                <strong>Domain:</strong> ${item.domain}
            `;
            itemsList.appendChild(li);
        });
    }

    // Add event listener for clear search button
    clearSearchBtn.addEventListener("click", clearSearch);

    // Function to clear search and display all items
    function clearSearch() {
        // Clear input fields
        document.getElementById("id-search").value = "";
        document.getElementById("name-search").value = "";
        document.getElementById("description-search").value = "";
        document.getElementById("domain-search").value = "";
        
        // Fetch all items again
        fetchItems();
    }

    // Add event listeners for search inputs
    const searchInputs = document.querySelectorAll("#search-form input");
    searchInputs.forEach(input => {
        input.addEventListener("input", function() {
            performSearch();
        });
    });

    // Function to perform search based on input fields
    function performSearch() {
        const idSearchTerm = document.getElementById("id-search").value.toLowerCase();
        const nameSearchTerm = document.getElementById("name-search").value.toLowerCase();
        const descriptionSearchTerm = document.getElementById("description-search").value.toLowerCase();
        const domainSearchTerm = document.getElementById("domain-search").value.toLowerCase();

        fetch("https://9ookpuq4tk.execute-api.us-east-1.amazonaws.com/prod/items")
            .then(response => response.json())
            .then(data => {
                const filteredItems = data.filter(item => 
                    new RegExp(idSearchTerm, 'i').test(item.mainID.toLowerCase()) &&
                    new RegExp(nameSearchTerm, 'i').test(item.mainDescription.toLowerCase()) &&
                    new RegExp(descriptionSearchTerm, 'i').test(item.scope.toLowerCase()) &&
                    new RegExp(domainSearchTerm, 'i').test(item.domain.toLowerCase())
                );
                displayItems(filteredItems);
            })
            .catch(error => console.error("Error fetching items:", error));
    }
});
