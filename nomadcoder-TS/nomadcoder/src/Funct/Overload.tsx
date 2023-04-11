// type Add = {
//     (a:number, b:number) : number;
// } //overloading 서로 다른 여러개의 call signatures를 가질때 발생시킴.

// const add:Add = (a, b) => a + b

// type Add = {
//     (a:number, b:number) : number;
//     (a:number, b:string) : number;
// } //overloading 서로 다른 여러개의 call signatures를 가질때 발생시킴.

// const add: Add = (a, b) => {
//     if(typeof b === "string") return a //b이면 a로 
//     return a + b //a면 a + b를 해준다. 
// }

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config: Config):void;
}

const push:Push = (config) => {
    if(typeof config === "string") {console.log(config)}
    else{
        console.log(config.path, config.state) 
    }
}

type Add = {
    (a:number, b:number) :number
    (a:number, b:number, c:number) :number,
}

const add:Add = (a,b,c) => {
    if(c) return a + b + c
    return a + b
}

add(1,2)
add(1,2,3)

// type Add = (a:number, b:number) => number; //call signatures

// const add:Add = (a, b) => a + b


function Overload(){
    return(
        <div>

        </div>
    );
}
export default Overload;