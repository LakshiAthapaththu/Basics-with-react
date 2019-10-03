import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/BindEvent";
import ParentComponent from "./component/ParentComponent";
import ConditionalRendering from "./component/ConditionalRendering";
import StyleSheet from "./component/StyleSheet";
import Inline from "./component/Inline";
import './myStyle.css'
import styles from './appStyle.module.css'
import Form from "./component/Form";
import Table from "./component/Table";
import ParentComp from "./component/ParentComp";
function App() {
  return (
    <div className="App">
        {/*<ParentComp/>*/}
         {/*<Table/>*/}
        {/*<Form></Form>*/}
        {/*<h1 className='succes'>Hi all I am Lakshi</h1>*/}
        {/*<h1 className={styles.error}>Hi all I am Laki</h1>*/}
        {/*<Inline/>*/}
        {/*<StyleSheet primary={true}/>*/}
        {/*<ConditionalRendering/>*/}
        {/*<ParentComponent/>*/}
        {/*<EventBind></EventBind>*/}
        {/*<ClassClick></ClassClick>*/}
      {/*<FunctionClick />*/}
        {/*<Counter/>*/}
        {/*<Message/>*/}
      {/*  <Greet name = 'Lakshi' >*/}
      {/*      <p>Hi children</p>*/}
      {/*  </Greet>*/}
      {/*  <Greet name = 'Dinushi'></Greet>*/}
      {/*      <button>hi</button>*/}
      {/*  <Greet name = 'Nalaka'></Greet>*/}

      {/*  <Welcome name= 'laki'/>*/}
      {/*  <Welcome name= 'dinu'/>*/}
      {/*  <Welcome name= 'polaka'/>*/}
      {/*  /!*custom component*!/*/}
      {/*/!*<Hello/>*!/*/}
    </div>
  );
}

export default App;
