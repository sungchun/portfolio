import React, { useState } from 'react';
import Menu from "./components/Menu";
import Links from "./components/Links";
import Display from "./components/Display"

function App() {
  const [info, setInfo] = useState({})
  return (
    <>
      <Links/>
      <Display info={info}/>
      <Menu setInfo={setInfo}/>
    </>
  )
}

export default App;
