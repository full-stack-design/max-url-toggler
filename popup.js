document.addEventListener('DOMContentLoaded', function() {
  const modifyButton = document.getElementById('modifyUrl');
  modifyButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({type: "modifyUrl"});
  });
});

document.getElementById('modifyUrl').addEventListener('click', function() {
  const openInNewTab = document.getElementById('newTab').checked;
  chrome.runtime.sendMessage({type: 'modifyUrl', newTab: openInNewTab});
});

