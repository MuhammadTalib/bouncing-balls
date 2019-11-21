window.onload=init()
var ctx
var cvs
var cultus
function init(){
	
	cvs=document.getElementById("mycanvas")
	ctx=cvs.getContext("2d")
	
	cultus	= new Car(20,10,20,20,"pingpong1.jpg")
	Mehran	= new Car(400,400,20,20,"car2.jpg")
	Corolla	= new Car(500,0,20,20,"car3.jpg")

	requestAnimationFrame(gameLoop)
}
function gameLoop() {

	clearCanvas(cvs)
	
	cultus.render()
	cultus.update()

	Mehran.render()
	Mehran.update()
	
	Corolla.render()
	Corolla.update()
	
	requestAnimationFrame(gameLoop)

}

function clearCanvas(cvs){
	const ctx = cvs.getContext("2d")
	ctx.save()
	ctx.globalCompositeOperation ="copy"
	ctx.strokeStyle="transparent"
	ctx.beginPath()
	ctx.lineTo(0,0)
	ctx.stroke()
	ctx.restore()
}