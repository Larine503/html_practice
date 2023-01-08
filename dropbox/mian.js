$(function(){
    $("#dropbox").on("dragenter",dragenter);
    $("#dropbox").on("dragleave",dragleave);
    $("#dropbox").on("dragover",dragover);
    $("#dropbox").on("drop",drop);
});

function dragenter(){
    $("#dropbox").css("background-color","red");
    $("#dropbox").text("文字真好吃😋");
}
function dragleave(){
    $("#dropbox").css("background-color","blue");
    $("#dropbox").text("請繼續餵食文字😍");
}
function dragover(e){
    e.preventDefault();
}
function drop(e){
    e.preventDefault();
    let files = e.originalEvent.dataTransfer.files;
    if(files.length == 0){
        return false;
    }
    convert(files[0]);
}
function convert(file){
    if(!file.type.match(/text.*/)){
        alert('我只吃文字😗');
        return false;
    }
    let reader = new FileReader();
    reader.onloadend = function(){
        let s = reader.result;
        $('#preview').text(s);
       dragleave();
    };
    reader.readAsText(file);
}

