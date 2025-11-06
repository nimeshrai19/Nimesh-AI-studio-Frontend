const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatWindow = document.getElementById("chatWindow");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  chatInput.value = "";

  // Simulated AI team response
  setTimeout(() => {
    const replies = [
      "Analyzing your request...",
      "Running calculations...",
      "Idea logged in memory.",
      "Claude agrees with that direction.",
      "Let's refine that feature next!"
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    addMessage(reply, "ai");
  }, 600);
});

function addMessage(text, role) {
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
