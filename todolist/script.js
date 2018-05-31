function get_todos() {
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
