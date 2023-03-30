import React, { useState, createContext, useContext } from 'react';

// Create a new context for error messages
const ErrorContext = createContext();

// Create a custom hook to use the error context
export const useError = () => useContext(ErrorContext);

// Create a new component to provide error context
export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');

  // Function to set error message
  const setError = (message) => {
    setErrorMessage(message);
  };

  // Function to clear error message
  const clearError = () => {
    setErrorMessage('');
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

// Example usage of the custom hook in another component
const ExampleComponent = () => {
  const { errorMessage, clearError } = useError();

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={clearError}>Clear Error</button>
    </div>
  );
};
