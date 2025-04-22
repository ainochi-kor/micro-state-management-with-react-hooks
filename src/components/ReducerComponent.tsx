import { useReducer } from "react";

// 지연 초기화
const init = () => ({
  count: 0,
  text: "hi",
});

const reducer = (
  state: {
    count: number;
    text: string;
    // text: string; // This line is commented out
    // [key: string]: any; // This line is commented out
  },
  action: {
    type: string;
    text?: string; // Optional property
  }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_TEXT":
      if (!action.text) {
        // 베일아웃
        return state;
      }
      return { ...state, text: action.text };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ReducerComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({
            type: "SET_TEXT",
            text: e.target.value,
          })
        }
      />
    </div>
  );
};

export default ReducerComponent;
