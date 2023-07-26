document.getElementById("replaceButton").addEventListener("click", function () {
    const inputText = document.getElementById("input").value;
  
    // Step 1: Data Preparation - Load bad words from your CSV file
    const badWordsList = [
      // Replace this array with your actual list of bad words from the CSV
      "badword1",
      "badword2",
      // Add more bad words as needed
    ];
  
    // Step 2: Building a Dictionary (Skip this step if you already have an emoji_for_profanity)
    const emojiForProfanity = '🤬';
  
    // Step 3: Input Processing and Bad Word Replacement
    function replaceProfanityWithEmoji(inputText) {
      const pattern = new RegExp('\\b(' + badWordsList.join('|') + ')\\b', 'gi');
      return inputText.replace(pattern, emojiForProfanity);
    }
  
    const outputText = replaceProfanityWithEmoji(inputText);
  
    // Step 4: Display the output
    document.getElementById("output").innerText = outputText;
  });
  