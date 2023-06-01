chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.start) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
  
      recognition.onresult = function(event) {
        const text = event.results[event.results.length - 1][0].transcript;
        chrome.tabs.sendMessage(sender.tab.id, { text: text });
      };
  
      recognition.start();
    }
  });
  