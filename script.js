
async function getSelectedEmojis() {
    const url = 'https://emoji-api.com/emojis?access_key=248401c675f25a4663a081f82c0b36bdf17f9f43';

    try {
        const response = await fetch(url);
        const emojis = await response.json();
        
        populateSelect(emojis);
    } catch (error) {
        console.error('Error has occured:');
    }
}

// Function to populate the select dropdown with emojis
function populateSelect(emojis) {
    const selectElement = document.getElementById('emoji-selected');

    emojis.forEach(emoji => {
        const option = document.createElement('option');
        option.value = emoji.character;
        option.text = emoji.character;
        selectElement.appendChild(option);
    });

    console.log('Dropdown populated with emojis:', emojis);
}

// Function to display the selected emoji
function displaySelectedEmoji() {
    const selectElement = document.getElementById('emoji-selected');
    const selectedEmoji = selectElement.value;
    const selectedEmojiContainer = document.getElementById('selected-emoji');

    console.log('Selected emoji:', selectedEmoji);

    // Clear previous content
    selectedEmojiContainer.innerHTML = '';

    if (selectedEmoji) {
        const emojiElement = document.createElement('span');
        emojiElement.innerHTML = selectedEmoji;
        emojiElement.style.fontSize = '48px';
        selectedEmojiContainer.appendChild(emojiElement);

        console.log('Displayed selected emoji:', selectedEmoji);
    }
}

// Fetch emojis when the page loads
console.log('Page loaded. Fetching emojis...');
getSelectedEmojis();