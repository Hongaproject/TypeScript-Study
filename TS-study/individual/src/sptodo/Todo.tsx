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

    console.log(onDelete);
    
    return(
        <div>
            TodoList!
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="할 일을 입력하세요." onChange={onChange} value={text} />
                    <button>등록</button>
                </form>
            </div>
            <div>
                {
                    todoList.map((item, index) => (
                        <div key={index}>
                            <p>{item.title}</p>
                            <div>
                                <button onClick={onDelete}>삭제</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Todo;