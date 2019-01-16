let contentPort = chrome.runtime.connect({
    name: 'background-content'
});

//Listen for runtime message
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //Retrieve offset dimension
    if(message.action === 'GET_DIMENSION') {
        contentPort.postMessage({
            type: 'DIMENSION',
            payload: {
                height: document.body.offsetHeight,
                width: document.body.offsetWidth
            }
        });
    }
});