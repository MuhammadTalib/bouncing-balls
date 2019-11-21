class Car{
	constructor(x,y,w,h,imageTitle){
		this.x=x
		this.y=y
		this.height=h
		this.width=w
		this.x_dif=9
		this.y_dif=4
		
		const img=new Image
		img.src="images/"+imageTitle
		console.log("img",img)
		img.onload =()=>{
			ctx.drawImage(img,x,y,w,h)
		}
		this.img = img;
		
	}
	lerp(start,end,amt){
		return (1-amt)*start+amt*end
	}
	drawImageBoundry(){
		ctx.beginPath()
		ctx.rect(this.x,this.y,this.width,this.height)
		ctx.strokeStyle='black'
		ctx.stroke()
		ctx.closePath()
	}
	render(){
		
		ctx.beginPath()
		ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
		ctx.closePath()
	}
	update(){
		this.advancePosition()
	}
	
}

Car.prototype.advancePosition = function(){
	//console.log("x",this.x)
	if(this.x_dif<0)this.x_dif=-9; else this.x_dif=9
	if(this.y_dif<0)this.y_dif=-4; else this.y_dif=4	
	
	if(this.x+this.width>=cvs.width){
		
		var n=Math.floor((Math.random()*10))
		
	
		this.x_dif = -1*n
	}
	if(this.y+this.height>=cvs.height){
		
		this.y_dif = -4
	}
	if(this.x<=0){
		this.x_dif = 9
	}
	if(this.y<=0){
		this.y_dif = 0.4
	}
	this.x =this.lerp(this.x,this.x+this.x_dif,1);
	this.y =this.lerp(this.y,this.y+this.y_dif,1);
}