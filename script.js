const chatContainer = document.querySelector('.chat-container');
const chatMessages = document.querySelector('.chat-messages');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');

let conversation = [];

sendButton.addEventListener('click', handleUserInput);

function handleUserInput() {
	const userMessage = userInput.value;
	conversation.push({ user: userMessage });
	displayMessage(userMessage, 'user');
	
	const response = getResponse(userMessage);
	conversation.push({ bot: response });
	displayMessage(response, 'bot');
	
	userInput.value = '';
}

function getResponse(userMessage) {
 if (userMessage.includes('hello')) {
		return 'Hello! How are you today?';
	} else if (userMessage.includes('help')) {
		return 'I\'m here to help! What do you need assistance with?'; 
    } else if (userMessage.includes('cello')) {
      return 'zxc?';
	} else {
		return 'I understand. Please provide more information.';
} 
}

function displayMessage(message, type) {
	const messageHTML = `<div class="message ${type}">${message}</div>`;
	chatMessages.insertAdjacentHTML('beforeend', messageHTML);
	chatContainer.scrollTop = chatContainer.scrollHeight;
}