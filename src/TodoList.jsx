const todos = [
  { task: "now the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}

export default TodoList;
