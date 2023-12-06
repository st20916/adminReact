const TodoTemplate = ({ children }) => {
    return (
        <div className="App-todo">
            <h6 className="common-title">일정 관리</h6>
            <div className="todo-content">
                {children}
            </div>
        </div>
    );
}

export default TodoTemplate;