$(function(){
    getLocation();
});
function getLocation(){
    if(navigator.geolocation == undefined){//找不到瀏覽器位置
         alert("Fail to get location");   //顯示無法取得
         return; //回傳
    }
    let settings = {
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(result, error, settings);
}
function result(position){
    // debugger;
    let thisCoords = position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    window.location.href = `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}
function error(err){
    alert(err);
}