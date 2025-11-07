// Sidebar collapse controls
const app = document.getElementById('app');
const leftCollapse = document.getElementById('leftCollapse');
const rightCollapse = document.getElementById('rightCollapse');

leftCollapse.addEventListener('click', () => {
  app.classList.toggle('collapsed-left');
});

rightCollapse?.addEventListener('click', () => {
  app.classList.toggle('collapsed-right');
});

// Simple mock chat so you can see motion immediately
const composer = document.getElementById('composer');
const promptInput = document.getElementById('prompt');
const chat = document.getElementById('chat');

composer.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = promptInput.value.trim();
  if (!text) return;

  addBubble(text, 'user');
  promptInput.value = '';

  // Simulate AI "typing"
  setTimeout(() => streamAI([
    "Analyzing your request…",
    "Formulating plan for agents (GPT-5, Claude, Gemini)…",
    "Drafting steps and sample Luau code block…"
  ]), 350);
});

function addBubble(text, role='ai'){
  const div = document.createElement('div');
  div.className = `bubble ${role}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function streamAI(lines){
  for (const line of lines){
    await wait(500);
    addBubble(line, 'ai');
  }
}

function wait(ms){ return new Promise(res => setTimeout(res, ms)); }
