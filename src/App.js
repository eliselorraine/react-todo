import React from 'react';
import Form from '../src/components/Form'
import List from '../src/components/List'
import Header from '../src/components/Header'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
