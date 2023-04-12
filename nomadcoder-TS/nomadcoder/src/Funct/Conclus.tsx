function superPrint<V>(a: V[]){
    return a[0]
} //제네릭을 사용하여 타입을 생성.

const a = superPrint([1,2,3,4])
const b =superPrint([true,false,true])
const c =superPrint(["a","b","c"])
const d =superPrint([1,2,true,false])


type Player<E> = { //<>는 무조건 대문자면 상관없다.
    name: string
    extraInfo:E
}
type HonggaExtra = {
    favFood:string
}
type HonggaPlayer = Player<HonggaExtra>
//type HonggaPlayer = Player<{favFood:string}>

const hongga: HonggaPlayer = {
    name: "hongga",
    extraInfo: {
        favFood:"Chicken breast"
    }
}
// const hongga: Player<{favFood:string}> = {
//     name: "hongga",
//     extraInfo: {
//         favFood:"Chicken breast"
//     }
// }

const hong: Player<null> = {
    name: "hong",
    extraInfo:null
} //extraInfo가 없다고 가정. 

type A = Array<number>

let a1:A = [1,2,3,4]

function printAllNumbers(arr: Array<number>){

}


function Conclus () {
    return(
        <div></div>
    );
}
export default Conclus;
