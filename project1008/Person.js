/*
모든 인종을 아우를 수 있는 최상위 객체인 사람의 정의
상위 객체일수록 보편적인 특징을 갖고있다..(우리의 현실과 동일..)
 */
class Person{
    constructor(eye,arm){
        this.eye=eye;
        this.arm=arm;
        console.log("I am suuper class");
        console.log("my eye %d , arm %d", this.eye ,this.arm);

    }
    walk(){
        console.log("두발로 걸어요");
    }
    speak(){
        console.log("말을 해요");
    }
}