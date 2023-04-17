// abstract class User {
//     constructor(
//         protected firstName: string,
//         protected lastName: string
//     ) {}
//     abstract sayHi(name:string):string
//     abstract fullName():string
// } //추상클래스를 인터페이스로 바꾸기.

// class Player extends User {
//     fullName() {
//         return`${this.firstName} ${this.lastName}`
//     }
//     sayHi(name:string) {
//         return`Hi ${name}. my name is ${this.fullName}`
//     }
// }

interface User {
    firstName: string,
    lastName: string
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health:number
}

class Player implements User, Human { //interface는 타입에서만 존재 
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName() {
        return`${this.firstName} ${this.lastName}`
    }
    sayHi(name:string) {
        return`Hi ${name}. my name is ${this.fullName}`
    }
}

function makeUser(user: User):User{
    return {
        firstName: "hong",
        lastName: "ga",
        sayHi: (name) => "string",
        fullName: () => "xx"
    }
}
makeUser({
    firstName: "hong",
    lastName: "ga",
    sayHi: (name) => "string",
    fullName: () => "xx"
})

function InterfaceT () {
    return(
        <div></div>
    );
}
export default InterfaceT;