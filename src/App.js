import React, {Fragment} from 'react';
import './App.css';

//component
import InputBook from './component/InputBook';
import ListBook from './component/ListBook';
import SqlBuilder from './component/SqlBuilder';
import TitleHead from './component/TitleHead';

function App() {
  return (
  <Fragment>
    <div className = "container">
      <TitleHead/>
      <InputBook/>
      <ListBook /> {/* Tambahkan komponen ListBooks */}
      <SqlBuilder/>
    </div>
  </Fragment>
  );
}

export default App;
