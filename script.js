// URL of your npoint.io endpoint
const endpoint = "https://api.npoint.io/870e5e322b3af3b50aa1"; // gouravgupta840@gmail.com

// Function to get the board name from the URL
function getBoardFromURL() {
  const path = window.location.pathname; // e.g., "/testing"
  return path.split("/")[1]; // Extract "testing" from "/testing"
}

// Fetch data from the JSON endpoint
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    // Get the board name from the URL
    const boardName = getBoardFromURL();

    // Find the matching board in the JSON data
    const boardData = data.find(item => item.board === boardName);

    if (boardData) {
      // Update the HTML content
      document.getElementById("heading").textContent = boardData.mockup.heading;
      document.getElementById("task").textContent = boardData.mockup.task;
    } else {
      // Handle case where the board is not found
      document.getElementById("heading").textContent = "Board not found";
      document.getElementById("task").textContent = `No data available for board: ${boardName}`;
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    document.getElementById("heading").textContent = "Failed to load data.";
  });
