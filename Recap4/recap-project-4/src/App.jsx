
import './index.css';

import { themes } from './db';

//import Preview from './components/Preview';
//import { useState } from 'react';

export default function App() {

 const listItems = themes.map (themes => <li key ={themes.id}>{themes.name}</li>);


 
 
return (


<>

<div className="textbg">
<h1 className="text">Theme Creator </h1>

<ul>{listItems}</ul>
</div>


  
        </>
      

);
}
