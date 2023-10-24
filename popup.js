document.addEventListener('DOMContentLoaded', function() {
  const modifyButton = document.getElementById('modifyUrl');
  modifyButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({type: "modifyUrl"});
  });
});
