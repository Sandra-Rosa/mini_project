chrome.webSpeechAPI.onSpeechStart.addListener(function() {
  // Start recording speech.
});

chrome.webSpeechAPI.onSpeechEnd.addListener(function() {
  // Stop recording speech.
});

chrome.webSpeechAPI.onSpeechResult.addListener(function(results) {
  // Get the results of the speech recognition.
  var transcript = results[0].transcript;

  // Do something with the transcript, such as display it in the browser's console.
  console.log(transcript);
});