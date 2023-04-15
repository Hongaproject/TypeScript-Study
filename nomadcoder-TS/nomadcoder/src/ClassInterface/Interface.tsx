//interface
// type Nickname = string
// type Health = number
// type Friends = Array<string>

// type Player = {
//     nickname: string,
//     healthBar: number
// }

// const hongga : Player = {
//     nickname: "hongga",
//     healthBar:20
// }

// type Food = string;
// const chiken:Food = "delicious" 이런식으로 작성 가능

type Team = "read" | "blue" | "yellow" //특정값을 가지게 한다.
type Health = 1 | 5 | 10 | 20

//type Player ={} or interface Player {} 같음.

// type Player = {
//     nickname: string,
//     team:Team
//     health:Health
// } 

interface Player {
    nickname: string,
    team:Team
    health:Health
}

const hong : Player = {
    nickname: "hong",
    team: "blue",
    health: 10
}

//번외
interface User {
    name: string
}

interface Players extends User {
}

const hongs : Players = {
    name:"hongs"
}
//interface는 오브젝트의 모양을 설명해주기 위해 존재한다.

type User1 = {
    name:string
}

type Players1 = User & {
}

const hongs1 : Players1 = {
    name:"hongs"
}

function Interface () {
    return(
        <div></div>
    );
}
export default Interface;