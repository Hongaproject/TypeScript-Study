// 타입스크립트로 투두리스트 제작당시 겪었던 오류 모음
import { useState } from "react";

interface List {
    id: number,
    title: string
}

function TodoErr () {

    const [list, setList] = useState<List[]>([ // 배열일 경우 어떤 타입으로 이루어진 배열을 알려줄수 있게 사용.
        {
            id: 1,
            title: '할 일1',
        },
        {
            id: 2,
            title: '할 일2',
        },
    ])
    const [text, setText] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { // input입력시 코드 실행을 위한 이벤트 핸들러
        setText(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 이밴트를 막아 줌.
        const newList: List = {
            id: Date.now(),
            title: text
        }
        setList([...list, newList]); // spread 메소드를 사용하여 전에 내용을 복사 후 그 뒤에 newList를 넣어줍니다.
        setText(""); // 내용 초기화
    }

    const onDelete = (id:number) => {
        setList(list.filter((item) => item.id !== id)); // filter로 id를 구별해서 삭제를 진행함.
    }

    return(
        <div>
            <h1>타입스크립트</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력해주세요." onChange={onChange}/>
                <button>등록</button>
            </form>
            <div>
                {
                    list.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <button onClick={() => onDelete(item.id)}>삭제</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TodoErr;