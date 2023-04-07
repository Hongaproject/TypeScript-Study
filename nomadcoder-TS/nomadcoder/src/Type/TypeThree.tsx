let a: unknown; // 응답을 받을 시 변수 타입을 모를 때 사용.

if(typeof a === 'number'){
    let b = a + 1;
}

if(typeof a === "string"){
    let b = a.toUpperCase();
}

function hello():void{ // void는 따로 선언하지 않고 함수가 아무것도 return하지 않는다고 알려 줌.
    console.log('x');
}

function hi():never{ // 오류를 발생시킨다. 
    throw new Error("xxx");
}

function goodbye(name:string|number){
    if(typeof name === "string"){

    } else if (typeof name === "number"){

    } else {

    }
}

function TypeThree () {
    return(
        <div></div>
    );
}

export default TypeThree;