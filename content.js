chrome.runtime.onMessage.addListener(function (message) {
    let badWordsList = message.badWordsList; // Replace with the actual bad words list from your CSV file
    let emojiForProfanity = '🤬'; // Replace with the actual emoji for profanity
  
    let pattern = new RegExp('\\b(' + badWordsList.join('|') + ')\\b', 'gi');
    let replacedText = document.body.innerText.replace(pattern, emojiForProfanity);
  
    document.body.innerText = replacedText;
  });
  