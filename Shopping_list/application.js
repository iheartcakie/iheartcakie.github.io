//$(document).ready(function(){
//  var Click_count= 0;
//    $('#card_holder').append('<div class="Shopping_list"><input>
//function disable() {
  //  document.getElementById("mySelect").disabled=true;
//}
//function enable() {
//  document.getElementById("mySelect").disabled=false;
//}
//</script>
//</head>
//<body>
//<form>
//<select id="mySelect">
//  <option>Apple</option>
  //<option>Cake</option>
  //<option>Banana</option>
  //<option>Milk</option>
//</select>
//<br><br>
//<input type="button" onclick="disable()" value="Disable list">
//<input type="button" onclick="enable()" value="Enable list">
//</form>
 //$(document).ready(function(){
  //var click_count = 0;
  //var click_1 = 'nothing';
  //var click_2 = 'nothing';
  //for(i in card_array){
  //  $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  //};
  //$('.card').click(function(){
    //if(click_count == 0){
  	//$(this).find('p').css('opacity', 1);
    //$(this).find('p').addClass('clicked');  
      //click_count = 1;
      //click_1 = $(this).find('p').text();
   //}
    //else{	
    //  $(this).find('p').css('opacity', 1);
      //click_count = 0;
      //click_2 = $(this).find('p').text();
      //$(this).find('p').addClass('clicked');
      //if(click_1 != click_2){
        // setTimeout(function(){$('.clicked').css('opacity', '0').removeClass('clicked')}, 1000);
    //  }
  //  };
 //});
//});
 
$(document).ready(function(){
$('#enter').on('click',function(){
var item = $('select option:selected').val();
   $('ul').append('<li>'+item+"</li>");
   if(item== 'Milk'){
   $('#pic').append("<img src='https://cloud.githubusercontent.com/assets/11163791/6759732/b1cb744a-cf18-11e4-909c-81b2570f3445.png'>");
   }
   else if (item=="Bananas"){
     $('#pic').append("<img src='https://cloud.githubusercontent.com/assets/11163791/6759953/b4ea5c70-cf1a-11e4-87a7-f99dcc13756b.png'>");;
}
else if (item=="Cake"){
  $('#pic').append("<img scr='https://cloud.githubusercontent.com/assets/11163791/6759935/7b5a1306-cf1a-11e4-8429-455de34b9128.jpg'>");
}
else{
  $('#pic').append("<img scr='https://cloud.githubusercontent.com/assets/11163791/6759943/87f0efb8-cf1a-11e4-93de-4df3afdf3794.png'>");
}
);
 $('#empty').on('click',function(){
var item = $('input').val();
$('ul').empty();
$('#pic').empty();
 });
});
