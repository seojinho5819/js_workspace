class BlackPerson extends Person{
    constructor(){
        //부모 생성자보다 먼저 생성이 될수 없다
        //this.name="nigro";(X)-밑으로 내리자
        //상태는 변수로 표현한다.
        
        super(5,10);//부모의 constructor()
        //부모생성자 호출이유? 자신의 초기화보다 최우선시 해야하는 작업은
        //부모의 존재 초기화이므로
        this.color="black";
        console.log("I am subclass");
       }
    //행동은 함수로 표현한다(즉, 메서드)
   
}