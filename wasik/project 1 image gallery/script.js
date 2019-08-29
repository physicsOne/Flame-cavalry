var content = document.querySelector("#main-content");
var colorPlate = document.querySelector("#color-plate");
var overlay = document.querySelector("#overlay");
var preview = document.createElement("img");
var imageList = document.querySelectorAll("#gallery li img");
var current;
var left = document.querySelector(".left");
var right = document.querySelector(".right");
function onslaught(place){
    var r = document.querySelector("#red").value;
    var g = document.querySelector("#blue").value;
    var b = document.querySelector("#green").value;
    var a = document.querySelector("#transparency").value;
    var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	place.style.backgroundColor =  rgba;
}
document.querySelector("#set").addEventListener("click",function(a){
	onslaught(content);
})
document.querySelector("#custom-color").addEventListener("input",function(c){
	if(c.target.tagName === "INPUT"){
		onslaught(colorPlate);
	}
},false);

document.querySelector("#gallery").addEventListener("click",function(e){
	if(e.target.tagName === "IMG"){
		for(var i = 0; i<=imageList.length;i++){
			if(e.target === imageList[i]){	
				current = i;
				break;
			}
		}
		src = e.target.parentNode.getAttribute("data-src");
			preview.src = src;
			preview.className = 'preview'
		overlay.append(preview);
		overlay.style.display = "block";
	}
	return current;
},false);


document.querySelector("#exit").addEventListener("click",function(){
	overlay.removeChild(preview);
	overlay.style.display = "none";
});
// task : slideshow : incomplete;
left.addEventListener("click",function(r){
	console.log(current);
	if(current <= 0){
		current = (imageList.length-1);
	}else{
		current--;
	}
	overlay.removeChild(preview);
	preview.src = imageList[current].getAttribute("src");
	overlay.append(preview)
	console.log(imageList[current].getAttribute("src"));
})
right.addEventListener("click",function(r){
	console.log(current);
	if(current >= (imageList.length-1)){
		current = 0;
	}else{
		current++;
	}
	preview.src = "";
	preview.src = imageList[current].getAttribute("src");
	console.log(imageList[current].getAttribute("src"));
	console.log(current);
})