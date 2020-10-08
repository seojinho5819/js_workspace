class YellowPerson extends Person{
    constructor(){
        super();//부모의 constructor()
        //부모생성자 호출이유? 자신의 초기화보다 최우선시 해야하는 작업은
        //부모의 존재 초기화이므로
        //상태는 변수로 표현한다.
        this.color="yellow";
      

    }
    //행동은 함수로 표현한다(즉, 메서드)
    
}