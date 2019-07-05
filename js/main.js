window.onload=function(){
	start();
}
function start(){
var img=document.getElementsByTagName("img");
var length=img.length;
var deg=360/length;
var bgimg=document.getElementsByTagName('body').firstChild;
Array.prototype.forEach.call(img,function(ele,index,self){
	ele.style.transform="rotateX(-20deg) rotateY("+index*deg+"deg) translateZ(350px)";
	ele.style.transition="1s"+" "+(length-index)*0.1+"s";
	ele.onclick=function(){
		
		this.style.animation="soso 3s";
	
	}
});
}



var newX,newY,lastX,lastY,minusX,minusY,rotX,rotY;
rotX=0,rotY=0;
var owrap=document.getElementById('wrap');
document.onmousedown=function(e){
	console.log(e.clientX+" "+e.clientY)
	lastX=e.clientX;
	lastY=e.clientY;
	this.onmousemove=function(e){
		// console.log(e.X+" "+e.Y)
		newX=e.clientX;
		newY=e.clientY;

		minusX=newX-lastX;
		minusY=newY-lastY;

		rotX-=minusY*0.2;
		rotY+=minusX*0.5;
		owrap.style.transform="rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
		lastX=newX;
		lastY=newY;

	}
	this.onmouseup=function(e){
		this.onmousemove="null";
	}
}

