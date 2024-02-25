// gameoflife.js

// Initialize the grid of cells
let grid = [];
let rows = 10;
let cols = 10;
for (let i = 0; i < rows; i++) {
  grid[i] = [];
  for (let j = 0; j < cols; j++) {
    grid[i][j] = Math.random() < 0.5 ? 1 : 0; // Randomly assign 1 (alive) or 0 (dead) to each cell
  }
}

// Draw the grid as an image
function drawGrid() {
  // Create a canvas element
  let canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 300;
  let ctx = canvas.getContext("2d");

  // Draw each cell as a square
  let cellSize = 30;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ctx.fillStyle = grid[i][j] == 1 ? "black" : "white"; // Fill the cell with black or white color
      ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize); // Draw the cell at the corresponding position
      ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize); // Draw a border around the cell
    }
  }

  // Convert the canvas to a data URL and return it
  return canvas.toDataURL();
}

// Update the grid according to the game of life rules
function updateGrid() {
  // Create a copy of the grid
  let nextGrid = [];
  for (let i = 0; i < rows; i++) {
    nextGrid[i] = [];
    for (let j = 0; j < cols; j++) {
      nextGrid[i][j] = grid[i][j];
    }
  }

  // Apply the rules to each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Count the number of living neighbors
      let liveNeighbors = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          // Skip the cell itself
          if (x == 0 && y == 0) continue;

          // Wrap around the edges
          let i2 = (i + x + rows) % rows;
          let j2 = (j + y + cols) % cols;

          // Add the neighbor's state to the count
          liveNeighbors += grid[i2][j2];
        }
      }

      // Apply the rules of the game
      // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
      // Any live cell with two or three live neighbours lives on to the next generation.
      // Any live cell with more than three live neighbours dies, as if by overpopulation.
      // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (grid[i][j] == 1) {
        // The cell is alive
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          // The cell dies
          nextGrid[i][j] = 0;
        }
      } else {
        // The cell is dead
        if (liveNeighbors == 3) {
          // The cell becomes alive
          nextGrid[i][j] = 1;
        }
      }
    }
  }

  // Replace the grid with the next grid
  grid = nextGrid;
}

// Handle the user actions from the frame buttons
function handleAction(action) {
  // Get the index of the button that was clicked
  let buttonIndex = action.button;

  // Perform the corresponding action
  switch (buttonIndex) {
    case 1:
      // Start the game
      startGame();
      break;
    case 2:
      // Pause the game
      pauseGame();
      break;
    case 3:
      // Reset the game
      resetGame();
      break;
    default:
      // Invalid action
      console.error("Invalid action: " + action);
      break;
  }
}

// Start the game loop
let interval;
function startGame() {
  // Check if the game is already running
  if (interval) return;

  // Set an interval to update and draw the grid every second
  interval = setInterval(() => {
    updateGrid();
    drawGrid();
  }, 1000);
}

// Pause the game loop
function pauseGame() {
  // Check if the game is running
  if (!interval) return;

  // Clear the interval
  clearInterval(interval);
  interval = null;
}

// Reset the game loop
function resetGame() {
  // Pause the game
  pauseGame();

  // Reinitialize the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = Math.random() < 0.5 ? 1 : 0;
    }
  }

  // Redraw the grid
  drawGrid();
}
