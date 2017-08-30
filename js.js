$(document).ready(function(){
    $("button").on("click", getNumbers);
  
  function getNumbers(){
      $.post(
       "mail.php",
      {
        fio : $(".inp1").val(),
        email : $(".inp2").val(),
        phone : $(".inp3").val()        
      }, 
      function (data){
        $("p").text(data);
      }
    )      
     
  }
});






