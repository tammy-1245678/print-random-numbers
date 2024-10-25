let count = 0; // Initialize a counter to control the loop
const outputDiv = document.getElementById('random-numbers'); // Select the placeholder div

while (count < 10) { // Set condition for the number of random numbers to generate
    let randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    const numberElement = document.createElement('p'); // Create a new paragraph element for each number
    numberElement.textContent = randomNumber; // Set the text of the paragraph to the random number
    outputDiv.appendChild(numberElement); // Append the paragraph to the div
    count++; // Increment the counter to avoid infinite loop
}