chrome.browserAction.onClicked.addListener(
    function(tab) {
        chrome.tabs.sendRequest(tab.id, {method: "getSelection"},
            function(response){
                sendServiceRequest(
                    encodeURIComponent(response.data || ''),
                    encodeURIComponent(tab.url)
                );
            }
        );
    }
);
function sendServiceRequest(text, url) {
    var url = 'https://gurlic.com/new?text=' + text + '&url=' + url;
    chrome.tabs.create({url: url});
}
