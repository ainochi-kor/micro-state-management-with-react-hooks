import React from "react";

const Component1 = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
};

const Component2 = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
};

const LiftingStateUp = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Component1 count={count} setCount={setCount} />
      <Component2 count={count} setCount={setCount} />
    </div>
  );
};

export default LiftingStateUp;

/**
 * Lifting State Up(상태 끌어올리기)
 * 상태를 상위 컴포넌트에 전달할 경우 Parent는 모든 자식 컴포넌트를 포함해 하위 트리 전체를 리렌더링할 것이다.
 * 이는 일부 상황에서 성능 문제를 일으킬 수 있다.
 */
