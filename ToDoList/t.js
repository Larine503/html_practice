//initial
$(function(){
    $("[type='checkbox']").on("change", updateProgress);  
  });
  
  function updateProgress(){
    // debugger;
    let hasChecked = 0;
    for(let x=0;x<$("[type='checkbox']").length;x++){
      if ($("[type='checkbox']")[x].checked){
        hasChecked += 1;
      }
    }
    $("meter").attr("min", 0);
    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value", hasChecked);
  
    $("progress").attr("value", hasChecked / $("[type='checkbox']").length);
  
    $("#myRange").attr("max", $("[type='checkbox']").length);
    $("#myRange").attr("value", hasChecked);
  
  }