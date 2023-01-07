function asyncProcess(imageID, imageURL){ //function名稱asyncProcess  imageID, imageURL傳入值
    return new Promise((resolve, reject)=>{ //每一個進來的 會設一個promise (開了新的通路)(第一個resolve 第二個reject)
        $(imageID).attr('src',imageURL); //把URL綁給他
        $(imageID).on('load',function(){  //等仔入load事件
            resolve($(this)[0].naturalWidth); //傳回拿到當下的原始寬度
        });
    });
}
 
$(function(){
    $("button").on("click",go);
});
 
function go(){
    Promise.all([ //陣列全部讀取完才會繼續
        asyncProcess("#image1","https://punchline.asia/wp-content/uploads/2017/09/it-movie-poster-1.jpg"),
        asyncProcess("#image2","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg"),
        asyncProcess("#image3","https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFIQk9PN3RZNUwuX0FDX1NMMTUwMF8uanBn.jpg")
    ])
    .then( //集結以上圖片的結果去做以下加總動作
        response => { //透過response取得
            var totalWidth = 0;
            for(var x=0;x<response.length;x++){ //做一個迴圈
                $("span").append(response[x]); //html的span,把x值放入
                totalWidth += response[x]; //總寬加上x值
                if(x<response.length-1){ //如果還不是最後一張圖的話
                    $("span").append(" + ");//在span後面加上+號
                }else{
                    $("span").append(" = "+totalWidth); //span後加上=總寬
                }
            }
        },
        error => {
            console.log(`Error:${error}`);//錯誤console.log 顯示error
        }
    );
}