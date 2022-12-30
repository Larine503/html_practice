$(function(){
    $("button").on("click",go);
});
 
const maleKeywords = ["雄","強","賢","志"];
const femaleKeywords = ["芸","芬","佩","琳"];
 

//箭頭函數
//只有一個傳入值可以省略箭頭函數前的()
//只有一句話return跟大括號可省略

// 只有一個參數時,括號才能不加:
//(單一參數) => { 陳述式; }
//單一參數 => { 陳述式; }

//若無參數，就一定要加括號:
//() => { statements }

//沒有傳入值的時候不能省略箭頭函數前的()
//大括號內實際綁定內容
let go = () => { //等於let go = function(){
    // alert("hi");
    var inputText = $("#userInput").val(); //.val()可拿值(第一個)或做設定(全部)
    // debugger;
    //陣列方法:some (檢查是否是對的)
    //字串方法:includes
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));// some語法:陣列方法,尋訪後面所有元素是否回傳是true
    const isFemale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    // debugger;
    if(isMale && isFemale){ //如果剛好名字都有男生和女生的關鍵字
        $("h1").text("😁");  //windows按鍵+.可以叫出表情符號
    }else if(isMale){    //只有男生關鍵字
        $("h1").text("🧑");
    }else if(isFemale){  //只有女生關鍵字
        $("h1").text("👩");
    }else{               //都沒有在關鍵字
        $("h1").text("😎");
    }
};