import React, { useState } from 'react';

const useComponent = () => {
  const [count, setCount] = useState(0);

  const Component = () => {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
  };

  return Component;
};

// Example usage of the custom hook
const ExampleComponent = () => {
  const CustomComponent = useComponent();

  return (
    <div>
      <h1>Custom Component</h1>
      <CustomComponent />
    </div>
  );
};
