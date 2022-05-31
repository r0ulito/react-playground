import "./App.css";
import TodoInput from "./components/TodoInput"

function App() {
  
  return (
    <div className="App">
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <TodoInput />
    </div>
  );
}

export default App;
