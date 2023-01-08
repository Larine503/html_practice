//1.選擇顏色元件
//2.偵測到使用者改變顏色
//3.拿到顏色數值
//4.設定背景顏色為該顏色


$(function(){
  $("[type='color']").on("change",showColor);
});
function showColor(){
  console.log(this.value);
  $('body').css("background-color",this.value);

};


 
  
  