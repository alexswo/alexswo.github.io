import React, { Fragment } from 'react';
import Body from './Body/Body';

import './App.css';
// https://github.com/artsy/force/blob/main/src/Components/FullBleedHeader/FullBleedHeader.tsx
function App() {
  return (
    <Fragment>
      <header></header>
      <main><Body/></main>
    </Fragment>
  );
}

export default App;
