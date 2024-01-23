import { useState } from "react";

function TodoR () {

    const [list, setList] = useState([
        {
            id: 1,
            title: '할 일1',
        },
        {
            id: 2,
            title: '할 일2',
        },
    ])
    const [text, setText] = useState("");

    const onChange = (e) => { // input에 입력시 코드 실행을 시키기 위한 이벤트 핸들러 
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newList = {
            id: Date.now(),
            title: text
        }
        setList([...list, newList]);
        setText("");
    }
    
    const onDelete = (id) => {
        setList(list.filter((item) => item.id !== id)); // filter로 id를 구별해서 삭제를 진행함.
    }

    return(
        <div>
            <h1>리액트</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력해주세요." onChange={onChange} />
                <button>등록</button>
            </form>
            <div>
                { 
                    list.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <button onClick={()=> onDelete(item.id)}>삭제</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

function TodoRItem () {
    return(
        <div>
            
        </div>
    );
}

export default TodoR;