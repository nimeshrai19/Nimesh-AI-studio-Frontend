// Basic MVP chat simulation
const form = document.getElementById("inputArea");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";
  // Simulate an AI response
  setTimeout(() => addMessage("👋 This is your AI responding!", "ai"), 600);
});

function addMessage(text, role){
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
