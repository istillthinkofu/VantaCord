
const form = document.getElementById("messageForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const content = input.value.trim();

  if (!content) return;

  const message = document.createElement("p");
  message.textContent = content;

  messages.appendChild(message);
  input.value = "";

  messages.scrollTop = messages.scrollHeight;
});

