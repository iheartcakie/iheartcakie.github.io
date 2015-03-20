$(document).ready(function(){
//  var Click_count= 0;
//    $('#card_holder').append('<div class="Shopping_list"><input>
function disable() {
    document.getElementById("mySelect").disabled=true;
}
function enable() {
    document.getElementById("mySelect").disabled=false;
}
</script>
</head>
<body>
<form>
<select id="mySelect">
  <option>Apple</option>
  <option>Cake</option>
  <option>Banana</option>
  <option>Milk</option>
</select>
<br><br>
<input type="button" onclick="disable()" value="Disable list">
<input type="button" onclick="enable()" value="Enable list">
</form>
