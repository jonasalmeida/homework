
function call(){
   var xVal=parseInt(document.getElementById('x').value);
   var yVal=parseInt(document.getElementById('y').value);
   document.getElementById("z").textContent=xVal+yVal
}
x.onkeyup=y.onkeyup=call
