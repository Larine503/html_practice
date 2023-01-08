$(function(){
    //讀取影片:設定影片元件路徑
    //找到影片元件
    // document.getElementById("myVideo")  JS寫法
    //jquery寫法
    $("#myVideo").attr("src","sample-mp4-file.mp4");
    //設定播放按鈕 綁定click 事件 ..xxx
    //onclick, addEventLister 
    $("#playBtn").on("click",function(){
        
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max = $("#myVideo")[0].duration;
        
        // console.log("yo");
        //1.播放影片或暫停影片 <- 確認影片狀態
        //2.設定按鈕文字 -> innerHTML
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("Pause");
        }else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
        //設定全螢幕按鈕
        $("#fullBtn").on("click",function(){
            $("#myVideo")[0].webkitEnterFullscreen();
        });
    
        $("#lowerVolumeBtn").on("click", downVolume);
        $("#higherVolumeBtn").on("click", upVolume);
        $("#myVideo").on("timeupdate", updateProgress);
        $("#progressBar").on("change", changeProgress);
    
    });
    
    function downVolume(){
        var myVideo = $("#myVideo")[0];
        if(myVideo.volume == 0){
        }else if(myVideo.volume < 0.1){
            myVideo.volume = 0;
        }else{
            myVideo.volume = myVideo.volume - 0.1;
        }
        $("#volumeDisplay").text(myVideo.volume.toFixed(2));
    }
    
    function upVolume(){
        var myVideo = $("#myVideo")[0];
        if (myVideo.volume == 1) {
        } else if (myVideo.volume > 0.9) {
            myVideo.volume = 1;
        } else {
            myVideo.volume = myVideo.volume + 0.1;
        }
        $("#volumeDisplay").text(myVideo.volume.toFixed(2));
    }
    
    function updateProgress(){
        $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
        // $("#timeDisplay").append("/"+Math.floor($("#myVideo")[0].duration)+"秒");
        $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
        $("#progressBar")[0].value = $("#myVideo")[0].currentTime;
    }
    
    function changeProgress(){
        $("#myVideo")[0].pause();
        $("#myVideo")[0].currentTime = $("#progressBar")[0].value;
        $("#myVideo")[0].play();
    }