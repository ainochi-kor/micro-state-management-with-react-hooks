const init = () => 0;

import React from "react";

const LazyInitStateComponent = () => {
  // init 함수는 평가되지 않고, 느리게 평가된다.
  const [count, setCount] = React.useState(init);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
};

export default LazyInitStateComponent;
