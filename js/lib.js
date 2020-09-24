/*-----------랜던함수,0~n------------*/
function getRandom(n){
    var r = Math.random();
    return Math.floor((n+1)*r);//소수점을 버린다

}
/*-----------랜던함수,n~n------------*/
function getRandomBetween(min,max){
    var r= Math.random();
    return Math.floor((max-min+1)*r)+min;
// return getRandom(max-min)+min;
}

/*---------------------------------------------------
두수 a,b에 대한 절대값을 반환하는함수!!
---------------------------------------------------*/
function getAbs(a, b){
    return Math.abs(a-b); //함수를 호출한 실행부가 결과를 가지고 
                                    //호출한곳으로 되돌아감
}
/*---------------------------------------------------
숫자에 0을 붙인 날짜 처리
매개변수, 즉 인수로 수를 전달하면 함수내에서 0을 붙여줌'
두자리 판단도 가능
---------------------------------------------------*/
function getZeroDate(n){
    //숫자 n이 10을 넘으면 그 존의 n은 그냥 쓰고 
    ///n이 10보다 작으면 앞에 0을 접두시킨다
    if(n<10){
        n="0"+n;
    }
    return n;
}
