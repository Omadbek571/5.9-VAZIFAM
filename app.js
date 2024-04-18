document.getElementById("postsBtn").addEventListener("click", function() {
    fetchData('posts');
});

document.getElementById("usersBtn").addEventListener("click", function() {
    fetchData('users');
});

document.getElementById("photosBtn").addEventListener("click", function() {
    fetchData('photos');
});

document.getElementById("todosBtn").addEventListener("click", function() {
    fetchData('todos');
});

function fetchData(resource) {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = '';

    data.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("list-item")
        itemDiv.textContent = JSON.stringify(item);
        dataDisplay.appendChild(itemDiv);
    });
}
