type SuperPrint = {
    // (arr: number[]):void
    // (arr: boolean[]):void
    // (arr: string[]):void
    // (arr: (number|boolean)[]):void
//    <TypePlaceholder>(arr: TypePlaceholder[]):void //타입을 유추해 call signature을 보여준다.
   <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
   <T>(arr: T[]): T
}

// const superPrint: SuperPrint = (arr) => {
//     arr.forEach(i => console.log(i))
// }

// superPrint([1,2,3,4])
// superPrint([true,false,true])
// superPrint(["a","b","c"])
// superPrint([1,2,true,false])

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3,4])
const b =superPrint([true,false,true])
const c =superPrint(["a","b","c"])
const d =superPrint([1,2,true,false])


function Polym () {
    return(
        <div></div>
    );
}
export default Polym;