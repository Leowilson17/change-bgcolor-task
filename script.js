var changeColor = document.getElementById('btn');
changeColor.innerHTML = "Background-Color";
changeColor.addEventListener('click',function(){
var arr = ['Blue','Green','Purple','Yellow'];
var random = Math.random();
var num = Math.floor(random * arr.length);
//console.log(num);
var newBox = document.querySelector('.box');
newBox.style.backgroundColor = arr[num];
changeColor.innerHTML = 'Background-Color' + ':' + arr[num];
});