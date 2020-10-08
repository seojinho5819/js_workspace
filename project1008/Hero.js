class Hero extends GameObject{
    constructor(container, src, width, height, x, y, velX, velY){
        super(container, src, width, height, x, y, velX, velY);
    }
    tick(){
        this.x+=this.velX;//기존x위치에 속도만큼 더해나간다
        this.y+=this.velY;//기존y위치에 속도만큼 더해나간다
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}