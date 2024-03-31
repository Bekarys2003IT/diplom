import Head from "./components/head/head"
import './components/style/images.css'
import React  from 'react';
import Routings from './components/routing/routing'
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  <Routings />
  return (
    <div>
    
    <Router>
    
<header>

      
<Head 
 title={"LAWLAPP"}
 home={"БАСТЫ БЕТ"}
 skills={"НЕГІЗГІ ЖАҢАЛЫҚТАР"}
 projects={"БІЗ ТУРАЛЫ"}
 contact={"КОНТАКТІЛЕР"}
 register={'ТІРКЕЛУ'}
 login={'АВТОРИЗАЦИЯ'}
 redactor={'БАСПА'}
 lawyer={'ЗАҢГЕР'}
 />


</header>

<Routings /> 
 </Router>


</div>


);
}

export default App;
