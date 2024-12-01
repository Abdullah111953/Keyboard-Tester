// Select the elements for key display and previous keys
const keyDisplay = document.getElementById("keyDisplay");
const keysList = document.getElementById("keysList");

// Store the pressed keys in an array
let pressedKeys = [];

// Listen for the keydown event
document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;

    // Update the displayed key
    keyDisplay.innerHTML = `<p>You pressed: ${keyPressed}</p>`;

    // Add the key to the list of previous keys
    pressedKeys.push(keyPressed);

    // Display the last 10 pressed keys
    updatePreviousKeys();
});

// Function to update the previous keys list
function updatePreviousKeys() {
    // Clear the current list
    keysList.innerHTML = '';

    // Only show the last 10 pressed keys
    const lastPressedKeys = pressedKeys.slice(-10);

    // Create list items for each key
    lastPressedKeys.forEach(key => {
        const li = document.createElement('li');
        li.textContent = key;
        keysList.appendChild(li);
    });
}
