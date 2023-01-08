let player;//YouTubePlayer
let currentPlay = 0;//記錄目前撥到第幾首歌

//YouTubeAPIReady   YT自動呼叫 function名稱不能改
function onYouTubeIframeAPIReady(){
    player=new YT.Player("player",{ 
        height:"390",
        width:"640",
        videoId:playList[currentPlay],//currentPlay最前面那首
        playerVars:{
            autoplay:0,//是否自動撥放 1自動播
            controls:0,//是否顯示控制項  1顯示撥放控制功能
            start:playTime[currentPlay][0],//開始秒數
            end:playTime[currentPlay][1],//結束秒數
            iv_load_policy:3 //預設值是1  3就會看不到  //  rel功能設定0 只會推薦同影片
        },
        events:{
            onReady:onPlayerReady, //onReady事件名稱不能改 當事件發生呼叫onReady  (YT功能)
            onStateChange:onPlayerStateChange //onStateChange事件名稱不能改  當狀態改變onStateChange被改變 (YT功能)
        }
    });
}

//YouTube Player Ready YT ifame準備好的
function onPlayerReady(event){
    $("#playButton").on("click",function(){
        $("h2").text(player.getVideoData().title); //全域變數的player YT的data
        player.playVideo();});}


//Player State Change 
function onPlayerStateChange(event){
    console.log(event.data);
    //-1: unstarted
    //0: ended
    //1:playing
    //2:paused
    //5:video cued
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){ //如果這首還不是最後一首
            currentPlay++;
            player.loadVideoById({
                videoId:playList[currentPlay], //
                startSeconds:playTime[currentPlay][0],//開頭
                endSeconds:playTime[currentPlay][1],//結尾
                suggestedQuality:"large"}); 
            }else{   //播到最後一首
                currentPlay=0;  //設定成0
                player.cueVideoById({videoId:playList[currentPlay],
                    startSeconds:playTime[currentPlay][0],
                    endSeconds:playTime[currentPlay][1],
                    suggestedQuality:"large"
                });
            } 
        }
        if(event.data==1){
            $("h2").text(player.getVideoData().title);
}
}


