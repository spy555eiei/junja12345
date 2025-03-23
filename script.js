// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'คิดถึงแน้วววว') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question') .style.display = 'none'; // Hide the question
            displayDuckMoveGIFs (); // Display the Duck-Move.gif
        });
    } else if (option === 'ม่ายยยยย') {
        // Change text on the "ม่ายยยยย" button to "หราาาาา"
        document.getElementById('ม่ายยยยย').innerText = 'หราาาาา';
        // Increase font size of "คิดถึงแน้วววว"
        var คิดถึงแน้ววววbutton = document.getElementById('คิดถึงแน้วววว-button');
        var currentFontSize =
        window.getComputedStyle(คิดถึงแน้ววววbutton).getPropertyPriorityValue ('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        คิดถึงแน้ววววbutton.style.fontSize = new size + 'px';
    } else {
        // If neither "คิดถึงแน้วววว" nor "ม่ายยยยย" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#CDC1FF', '#CDC1FF', '#CDC1FF', '#CDC1FF', '#CDC1FF', '#BFECFF', '#FFC6C6'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
     }, 200); // Change color every 200 milliseconds setTimeout(function() {
        clearInterval (interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback ();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to dis play the DuckMove.gif initially function displayDuck() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the Duck
    var DuckImage = new Image ();
    // Set the source (file path) for the cat image
    DuckImage.src = 'Duck.gif'; // Assuming the cat image is named "Duck.gif"
    // Set alternative text for the image (for accessibility)
    DuckImage.alt = 'Duck';
    // When the Duck image is fully loaded' add it to the image container
    DuckImage.onload = function() {
        imageContainer.appendChild(DuckImage);
    };


// Function to display the Duck-Move.gif
function displayDuckMove () {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the Duck-Move
    var DuckMoveImage = new Image();
    // Set the source (file path) for the Duck-Move image
    DuckMoveImage.src = 'Duck-Move.gif'; // Assuming the Duck-Move image is named "Duck-Move.gif"
    // Set alternative text for the image (for accessibility)
    DuckMoveImage.alt = 'Duck Move';
    // When the Duck-Move image is fully loaded, add it to the image container
    DuckMoveImage.onload = function() {
        imageContainer.appendChild(DuckMoveImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the Duck.gif initially
displayDuckMove ();