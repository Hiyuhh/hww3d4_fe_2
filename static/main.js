// 1. Document Manipulation with JavaScript


// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

// Task 2: Write a function to display the product information on the webpage dynamically.

// Task 3: Implement an event listener to trigger the display of products when the page loads.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    for (const [key, value] of Object.entries(products)) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <h2>${value.name}</h2>
            <p>Price: $${value.price}</p>
            <p>${value.description}</p>
        `;
        productContainer.appendChild(productCard);
    }
}

window.addEventListener("DOMContentLoaded", displayProducts);


// 2. Form Manipulation with JavaScript


// Task 1: Create an HTML form with input fields for the user's name, email, and message.

// Task 2: Write JavaScript code to handle form submissions and store user input in an object.

// Task 3: Implement form validation to ensure that all required fields are filled before submission.


function handleSubmit(event) {
    event.preventDefault();

    const formInput = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (formInput.name && formInput.email && formInput.message) {
        console.log(formInput);
    }
    else {
        alert("Please fill out all required fields.");
    };
    
    document.getElementById("contact-form");
};



// 3. Styling with JavaScript


// Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

function changeColor() {
    const box = document.getElementById("box");
    box.style.backgroundColor = "pink";
}

function changeText() {
    const output = document.getElementById("output");
    output.innerText = "Play Valorant!";
}

function changeHover() {
    const hoverBox = document.getElementById("hover-box");
    hoverBox.style.backgroundColor = "lavender";
}

function resetHover() {
    const hoverBox = document.getElementById("hover-box");
    hoverBox.style.backgroundColor = "white";
}








