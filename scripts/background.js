chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse) {
        var args=arg.collection;
        for (i in args){
            var video_url=args[i];
            try{
                saveas='InstagramVideo.mp4';
            }
            catch (problem){
            }

            chrome.downloads.download({
                url: video_url,
                filename: saveas,
                saveAs: false
            });
        }
    });

function sendResponse(){
}