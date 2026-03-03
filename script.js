/* ====================================================
   LiveLab 10 – AI Recommendation Engine
   Student Starter Code
   
   YOUR MISSION: Complete the TODOs below to build
   your AI-powered recommendation engine!
======================================================== */

// STEP 1: Select DOM Elements (COMPLETED FOR YOU)
const button = document.getElementById("askBtn");
const input = document.getElementById("userInput");
const responseDiv = document.getElementById("response");

// STEP 2: Add Event Listener (COMPLETED FOR YOU)
button.addEventListener("click", async () => {
  const userQuestion = input.value.trim();

  // ====================================================
  // TODO STEP 3: Implement Error Handling
  // Check if the input is empty. If it is, show a
  // friendly message and return early.
  //
  // HINT: Use an if statement to check if userQuestion is falsy
  // HINT: Set responseDiv.textContent to a friendly message
  // HINT: Use return to stop execution
  // ====================================================

  // YOUR CODE HERE

  // Show loading message while waiting for AI
  responseDiv.textContent = "Thinking...";

  // ====================================================
  // TODO STEP 4: Connect to the AI
  // Complete the fetch request below to send the user's
  // question to your Cloudflare Worker and display the response.
  // ====================================================

  try {
    // TODO: Replace YOUR_CLOUDFLARE_WORKER_URL with your actual Worker URL
    const res = await fetch("YOUR_CLOUDFLARE_WORKER_URL", {
      // TODO: Add method: "POST"
      // TODO: Add headers: { "Content-Type": "application/json" }
      // TODO: Add body: JSON.stringify({ message: userQuestion })
    });

    // TODO: Check if response is ok. If not, throw an error
    // HINT: if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    // TODO: Parse the JSON response and store it in a variable called 'data'
    // HINT: const data = await res.json();

    // TODO: Display the AI's response in responseDiv
    // HINT: responseDiv.textContent = data.reply;
    // NOTE: Your Worker might return data.reply or data.message - check your Worker code!
  } catch (error) {
    // TODO: Handle errors - show a friendly message and log the error
    // HINT: console.error("Error:", error);
    // HINT: responseDiv.textContent = "Oops! Something went wrong. Try again.";
  }
});

/* =====================================
   NEXT STEPS AFTER COMPLETING TODOs:
   1. Test your app with sample queries
   2. Add custom styling to match your concept
   3. OPTIONAL: Display multiple responses (last 3)
   4. OPTIONAL: Add chat bubble styling
   5. OPTIONAL: Add emojis or themed design
===================================== */
