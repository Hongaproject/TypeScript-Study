import { useState } from "react";

interface List {
    id: number;
    title: string;
  }

function Todo () {
    // 투두리스트 제작 - 삼항 x, 기능구현 정보 안찾으면서 제작, TS로 제작 
    const [text, setText] = useState<string>("");
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