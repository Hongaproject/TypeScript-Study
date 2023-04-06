
// const numbers: readonly number[] = [1,2,3,4];
// numbers.push(1) //readonly은 불변성을 가진다. 


//사용 가능.
const numbers1: readonly number[] = [1,2,3,4];

const numbers2: readonly string[] = ["1"];

const player: [string, number, boolean] = ["hongga", 1, true];

//any
const a : any[] = [1,2,3,4]
const b : any = true
a+b;

function TypeTwo () {
    return(
        <div></div>
    );
}

export default TypeTwo;