
function App(props) {

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            O que precisa ser feito?
          </label>
        </h2>

        <input 
          type="text" 
          id="new-todo-list" 
          className="input input__lg" 
          name="text" autoComplete="off" 
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Adicionar
        </button>
      </form>

      <div className="filter btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Todos</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Ativa</span>
        </button>
        <button type="button" className="btn btn-toggle" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span className="visually-hidden">tarefas </span>
          <span>completada</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tarefas restantes
      </h2>
      <ul role="list" 
        className="todo-list stack-larger stack-exceptiion"
        arioa-aria-labelledby="list-heading"
      >
        <li className="todo stack-small"></li>
      </ul>
    </div>
  )
}

export default App;
