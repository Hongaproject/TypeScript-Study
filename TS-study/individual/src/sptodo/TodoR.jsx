import { useState } from "react";

function TodoR () {

    const [list, setList] = useState([ // 배열로 내용을 만들어서 map을 사용해서 내용을 보여지게 만듬.
        {
            id: 1,
            title: '할 일1',
        },
        {
            id: 2,
            title: '할 일2',
        },
    ])
    const [text, setText] = useState(""); // input에 입력 할 때 value 값을 받기 위해 사용

    const onChange = (e) => { // input에 입력시 코드 실행을 시키기 위한 이벤트 핸들러 
        setText(e.target.value);
    }

    const onSubmit = (e) => { // 입력 한 내용을 저장 할 수 있게 도와줌.
        e.preventDefault();
        const newList = { 
            id: Date.now(),
            title: text
        }
        setList([...list, newList]); // spread 문법을 사용해서 list부분을 복사한 후, newList내용을 뒤에 붙힌다.
        setText(""); // 텍스트를 작성하고 완료가 되었을 때 초기화를 시킴.
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
        const newUpdate = list.map((data) => { // list 부분에 있는 내용을 map으로 나타내어줌.
            if(data.id === id){ // list부분에 있는 id를 가져와서 id가 동일하다면
                data.title = updateText // updateText값이 들어가게 해준다.
            }
            return data 
        });

        setList(newUpdate); // 바뀐 부분을 setList에 저장해준다.
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