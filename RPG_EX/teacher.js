$(document).on("keydown", function(event){
    // debugger;
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
      "x":-1,
      "y":-1
    };
  
    targetBlock = {
      "x":-1,
      "y":-1
    };
  
    event.preventDefault();
  
    console.log(event.code);
  
    switch(event.code){
      case "ArrowLeft":
        targetImg.x = currentImgMain.x - gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX = 175; //Face Left
        break;
      case "ArrowUp":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y - gridLength;
        cutImagePositionX = 355; //Face Up
        break;
      case "ArrowRight":
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX = 540; //Face Right
        break;
      case "ArrowDown":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y + gridLength;
        cutImagePositionX = 0; //Face Down
        break;
      default://Other key - no effect
        return;
    }
  
    //Confirm the main role will not leave the map
    if(targetImg.x <= 400 && targetImg.x >= 0 && targetImg.y <=400 && targetImg.y >=0){
      targetBlock.x = targetImg.y / gridLength;
      targetBlock.y = targetImg.x / gridLength;
    }else{
      targetBlock.x = -1;
      targetBlock.y = -1;
    }
  
    //clear main role
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
  
    if(targetBlock.x != -1 && targetBlock.y != -1){
      //Check Map data
      switch(mapArray[targetBlock.x][targetBlock.y]){
        case 0: // can go
          $("#talkBox").text("");
          currentImgMain.x = targetImg.x;
          currentImgMain.y = targetImg.y;
          break;
        case 1: // Mountain
          $("#talkBox").text("有山");
          break;
        case 2: // can go - Final Stop
          $("#talkBox").text("終點");
          currentImgMain.x = targetImg.x;
          currentImgMain.y = targetImg.y;
          break;
        case 3: // Enemy
          $("#talkBox").text("哈摟");
          break;
      }
    }else{
      $("#talkBox").text("邊界");
    }
  
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
  
  });