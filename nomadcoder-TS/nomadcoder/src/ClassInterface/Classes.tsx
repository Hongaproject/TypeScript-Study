// abstract class User { //추상클래스
//     constructor(
//         private firstName:string,
//         private lastName:string,
//         public nickname:string
//     ) {}
//     getFullName(){
//         return `${this.firstName} ${this.lastName}` 
//         //메소드 추상클래스안에 추상클래스 구현 가능
//         //메소드의 call S만 작성해야함.
//     }
// }

// // class Player {
// //     constructor(
// //         private firstName:string,
// //         private lastName:string,
// //         public nickname:string
// //     ) {}
// // }

// class Player extends User{
    
// }

// // const hongga = new User("hong", "ga", "홍가"); 추상클래스만 상속가능 직접적으로 인스턴스는 못만듬.
// const hongga = new Player("hong", "ga", "홍가");
// hongga.nickname
// hongga.getFullName();

abstract class User { //추상클래스
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string
    ) {}
    abstract getNickName():void

    getFullName(){
        return `${this.firstName} ${this.lastName}` 
        //메소드 추상클래스안에 추상클래스 구현 가능
        //메소드의 call S만 작성해야함.
    }
}

// class Player {
//     constructor(
//         private firstName:string,
//         private lastName:string,
//         public nickname:string
//     ) {}
// }


class Player extends User{
    getNickName() {
        console.log(this.nickname)
    }
}

// const hongga = new User("hong", "ga", "홍가"); 추상클래스만 상속가능 직접적으로 인스턴스는 못만듬.
const hongga = new Player("hong", "ga", "홍가");
hongga.getFullName();

function Classes () {
    return(
        <div></div>
    );
}

export default Classes;