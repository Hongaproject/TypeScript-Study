    let a : number = 1;
    let b : string = "i1";
    let c : boolean = true;

    let a1 : number[] = [1]; //let a1 : number[] = [1];
    let b1 : string[] = ["i1"];
    let c1 : boolean[] = [true];

    
    const player : {
        name : string,
        age? : number //age를 선택적으로 만들어줌.
    } = {
        name : "Hongga"
    }
    console.log(player);



    type Age = number;
    type Name = string;
    type Player = {
        name:string,
        age?:number
    }
    const hongga : Player = {
        name: "hongga"
    }
    console.log(hongga);



function Who (name:string) {
    return(
        name
    );
}

const Who1 = (name:string) : Player => ({name})






function TypeOne () {
    return(
        <div></div>
    );
}
export default TypeOne;

