document.getElementById("download").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function downloadVideo() {
        let url = document.URL;
        console.log('Page URL '+url.toString());
        if(!url.toString().includes('www.instagram.com/p/')){
            alert('You are in the main page. Go to specific video\'s page by "Go To Post" menu and download the video.');
        }else{
            let download_link = document.querySelectorAll('video.tWeCl')[0].getAttribute('src');
            console.log('DOWNLOAD URL is'+download_link);
            var pass_array=[];
            pass_array.push(download_link);
            var param = {collection : pass_array};
            chrome.runtime.sendMessage(param);

        }
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + downloadVideo + ')();'
    });
});