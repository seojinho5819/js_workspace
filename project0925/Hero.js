/*게임의 주인공비행기를 정의한다*/
class Hero{
    //주인공이 태어날때 어떠한 초기화 작업을 진행할지를 결정짓는 메서드
    //특히 생성자 메서드라한다
    //아래의 생성자 함수를 호출하는 자는,반드시 주인공이미지가 붙게될 
    //부모요소를 전달해야 한다.. 즉 container 변수값을 결정지어야 한다
    constructor(container,x,y,width,height){
        //constructor안에 선언된 변수는 인스턴스꺼다!
        //this가 붙어있는 변수는, 해당 인스턴스와 생명력을 같이한다.
        //즉 해당 인스턴스마다 각각 고유하게 보유할수 있는 변수
        //인스턴스가 죽을때 변수도 죽는다
        this.babo="바봉";
        this.x=x;
        this.y=y;
        //생성자 안에서는 반드시 변수명 앞에 this를 명시해야 한다
        //왜? 객체 안에서의 코드 작성이므로..
        this.img =document.createElement("img");
        this.img.src="../images/shooting/plane.png";
        this.img.style.position="absolute";
        this.img.style.left=x+"px";
        this.img.style.top=y+"px";
        this.img.style.height=width+"px";
        this.img.style.width=height+"px";
        //화면에 부착하기!

        //부모요소에 부착하자
        container.appendChild(this.img);

    }
    move(){

    }
}