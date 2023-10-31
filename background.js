chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'modifyUrl') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      if (!currentTab) return;

      const currentUrl = currentTab.url;
      const urlObject = new URL(currentUrl);
      
      if (urlObject.host === 'www.max.com') {
        urlObject.host = 'web-preview.prd.api.discomax.com';
      } else if (urlObject.host === 'web-preview.prd.api.discomax.com') {
        urlObject.host = 'www.max.com';
      } else {
        return;
      }
      
      if (message.newTab) {
        chrome.tabs.create({ url: urlObject.toString(), active: false });
      } else {
        chrome.tabs.update(currentTab.id, { url: urlObject.toString() });
      }
    });
  }
});
