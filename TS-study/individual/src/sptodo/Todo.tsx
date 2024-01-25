import { useState } from "react";

// 타입스크립트는 type과 interface로 객체 타입을 지정할 수 있다.
// type과 interface의 차이
// 둘 다 비슷하지만 약간의 차이가 있음
// 공통점은 확장 상속이 가능하다.
// 차이점은 선언적 확장이 되고 안되고가 있다.

// interface는 extends키워드를 사용하여 확장
// type은 &기호를 사용하여 확장

// interface는 같은 이름을 사용하면 선언적으로 확장이 가능함.
// type은 선언적 확장이 불가능 함.

interface List {
    id: number;
    title: string;
  }

function Todo () {
    // 투두리스트 제작 - 삼항 x, 기능구현 정보 안찾으면서 제작, TS로 제작 
    const [text, setText] = useState<string>(""); // 타입을 지정해준다.
    const [todoList, setTodoList] = useState<List[]>([ 
        {
          id: 1,
          title: "할일 1",
        },
        {
          id: 2,
          title: "할일 2",
        },
      ]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newList: List = {
            id: Date.now(),
            title: text
        };
        setTodoList([...todoList, newList]);
        setText("");
    }

    const onDelete = (id: number) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    }

    const onUpdate = (newList: List): void => {
        const newTodoList = todoList.map((item) => {
            if (item.id === newList.id) {
              return newList;
            } else {
              return item;
            }
        })
        setTodoList(newTodoList);
    }
    
    return(
        <div>
            TodoList!
            <div>
            <CreateTodo onChange={onChange} onSubmit={onSubmit} text={text}/>
                {
                    todoList.map((item) => (
                        <div>
                            <Todoitem key={item.id} id={item.id} title={item.title} onDelete={onDelete} onUpdate={onUpdate}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

interface Item {
    id: number;
    title: string;
    onDelete(id:number): void;
    onUpdate(updateItem: List): void;
}


function Todoitem ({id, title, onDelete, onUpdate}: Item) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [updateTitle, setUpdateTitle] = useState<string>(title);

    const updateOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(e.target.value);
    }

    const updateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updateItem: List = {
            id: id,
            title: updateTitle
        };
        onUpdate(updateItem);
        setIsUpdate(false);
    }
    
    return(
        <div>
            {!isUpdate ? (
                <div>
                    {title}
                    <div>
                        <button onClick={() => setIsUpdate(true)}>수정</button>
                        <button onClick={() => onDelete(id)}>삭제</button>
                    </div>
                </div>
            ) : (
                <div>
                    <form onSubmit={updateOnSubmit}>
                        <input type="text" placeholder="수정 할 내용을 입력해주세요!" onChange={updateOnChange} value={updateTitle}/>
                        <div>
                            <button type="submit">확인</button>
                            <button onClick={() => setIsUpdate(false)}>취소</button>
                        </div>
                    </form>
                </div>
            )
            }
        </div>
    );
}

interface Create {
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
    text: string;
}

function CreateTodo({onChange, onSubmit, text}: Create) {
    return(
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder="할 일을 입력해주세요!" onChange={(e) => onChange(e)} value={text} />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default Todo;