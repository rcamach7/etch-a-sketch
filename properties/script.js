// Create a 16x16 grid
function createGrid(sizeOfGrid) {
    // Get reference to our main container in the HTML and begin generating our grid
    const mainContainer = document.getElementById("mainContainer");
    for (let row = 0; row < sizeOfGrid; row++) {
        // This RowBox / Row number will store our collection of 16 col items within it
        const rowBox = document.createElement("div");
        rowBox.classList.toggle("rowBox");

        // Create each column element within the rowbox
        for (let col = 0; col < sizeOfGrid; col++) {
            // Create the actual div we are injecting with the appropriate class
            const newCol = this.document.createElement("div");
            newCol.classList.toggle("col");

            // Add unique identifier
            let uniqueID = row + "x" + col;
            newCol.setAttribute("id", uniqueID);

            // Now we will attach an event listener - so that when hovered over it will change styling
            newCol.addEventListener("mouseover", hovered);
            
            rowBox.appendChild(newCol);
        }
        // Now that everythings added to the row, we can inject it into our HTML
        mainContainer.appendChild(rowBox);
    }
}

// This will style any div's the mouse has hovered
function hovered(e) {
    const selectedDiv = document.getElementById(e.target.id);
    selectedDiv.style.backgroundColor = "gold";
}
// Default Grid
createGrid(16);

function generateGrid() {
    // Get new grid size, and validate information provided
    const x = parseInt( prompt("Amount Of Rows and Columns Wanted: ") );
    if (isNaN(x) || x > 100) {
        alert("Invalid Entry");
        return;
    }

    // Clear mainContainer from current grid
    const mainContainer = document.getElementById("mainContainer");
    removeAllChildNodes(mainContainer);

    // Finally, go ahead and generate the requested grid
    createGrid(x);
}

// Remove grid that exists in out container.
function removeAllChildNodes(mom) {
    while (mom.firstChild) {
        mom.removeChild(mom.firstChild);
    }
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", generateGrid);

