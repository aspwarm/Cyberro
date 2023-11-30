function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
    displayMessage('User', userInput);
    // Call backend/API for AI response (not implemented here)
    // For example, you can use OpenAI's GPT-3 API
    // Handle the AI response and call displayMessage again
  }
  document.getElementById('user-input').value = '';
}

function displayMessage(sender, message) {
  const chatDisplay = document.getElementById('chat-display');
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatDisplay.appendChild(messageElement);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
