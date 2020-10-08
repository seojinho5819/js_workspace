class Enemy extends GameObject{
    constructor(container, src, width, height, x, y, velX, velY){
        super(container, src, width, height, x, y, velX, velY);
    }
    tick(){
        this.x+=this.velX;//기존x위치에 속도만큼 더해나간다
    }        
    render(){
        this.img.style.left=this.x+"px";
       
    }

}