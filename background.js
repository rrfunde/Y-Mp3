var YOUTUBE_dOWNLOADER_URL = "http://youtubeinmp3.com/fetch/?video=";
chrome.pageAction.onClicked.addListener(function (tab) {

    var url = YOUTUBE_dOWNLOADER_URL + tab.url;
    if (url.indexOf("watch?v=") !== -1) {
        chrome.tabs.create({url: url, active: false});
    }


});


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (tab.url.indexOf('youtube.com/watch') > -1) {

        chrome.pageAction.show(tabId);
        chrome.pageAction.setTitle({tabId:tabId,"title": "audio download"})
    }
});
