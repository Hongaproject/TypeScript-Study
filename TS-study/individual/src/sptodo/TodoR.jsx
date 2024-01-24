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
                    list.map((todo) => (
                        <div>
                            <TodoRItem list={list} setList={setList} id={todo.id} title={todo.title} onDelete={() => onDelete(todo.id)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

function TodoRItem ({list, title, onDelete, setList, id}) {
    // 수정부분을 위해 작성

    const [isUpdate, setIsUpdate] = useState(false); // 수정 사항 구별 
    const [updateText, setUpdateText] = useState(title); // 편집시 사용할 input의 value값을 받기 위해 state 생성
    
    const onChange = (e) => {
        setUpdateText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newUpdate = list.map((data) => {
            if(data.id === id){
                data.title = updateText
            }
            return data
        });

        setList(newUpdate);
        setIsUpdate(false);
    }

    return(
        <div>
            {
                !isUpdate ? (
                    <div>
                        <p>{title}</p>
                        <button onClick={() => setIsUpdate(true)}>수정</button>
                        <button onClick={onDelete}>삭제</button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={onSubmit}>
                            <input type="text" onChange={onChange} value={updateText} />
                            <button>확인</button>
                            <button onClick={() => setIsUpdate(false)}>취소</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
}

export default TodoR;