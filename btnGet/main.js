// Elements多個 [0]所以指定第0個
let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");

thisButton.addEventListener("click", loadServerData)

function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("No XMLHttpRequest!");
        return;
    }


//從server上取得一個txt檔
xmlHttpRequest.open("GET","DataFromServer.txt",true)
xmlHttpRequest.send();


//readyState屬性   status屬性(status code 請求跟回應中的狀態顯示2開頭是好的4開頭是不好的5開頭是伺服器端問題)
//onreadystatechange狀態改變會跑進這段function
xmlHttpRequest.onreadystatechange = function(){
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
        showData.innerHTML = xmlHttpRequest.readyState;
        thisButton.style.visibility ="hidden";
    }
}
}