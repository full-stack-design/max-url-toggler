chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "modifyUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = tabs[0].url;
      const urlObject = new URL(currentUrl);
      
      if (urlObject.host === "www.max.com") {
        urlObject.host = "web-preview.prd.api.discomax.com";
      } else if (urlObject.host === "web-preview.prd.api.discomax.com") {
        urlObject.host = "www.max.com";
      } else {
        // If neither, don't proceed
        return;
      }
      
      chrome.tabs.create({ url: urlObject.toString() });
    });
  }
});
