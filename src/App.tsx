import "./App.css";
import LazyInitStateComponent from "./components/LazyInitStateComponent";
import ReducerComponent from "./components/ReducerComponent";

function App() {
  return (
    <>
      <div>
        <h2>Lazy Initialize</h2>
        <LazyInitStateComponent />
      </div>
      <div>
        <h2>useReducer 사용하기</h2>
        <ReducerComponent />
      </div>
    </>
  );
}

export default App;
