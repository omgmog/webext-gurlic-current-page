ext = new Extension();

const sendURL = (taburl) => {
    let url = encodeURIComponent(taburl);
    ext.tabs.create({url: `https://gurlic.com/new?url=${url}`});
}
const handleActionClick = tab => {
    ext.tabs.sendMessage(tab.id, {}, _ => {
        sendURL(tab.url);
    });
}

ext.browserAction.onClicked.addListener(handleActionClick);