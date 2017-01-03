import React from 'react';

class App extends React.Component {
   render() {
      var i = 1;
      
      var myStyle = {
          fontSize : 100,
          color : '#FF0000'
      }

      return (
         <div>
           <h1 style= {myStyle}>Red Hat</h1>
           <h2>Content</h2>
           <p> Hello World!!! ,
                Welcome to Red hat </p>
           <p data-myattribute = "customeattri">This is custome attribute !!!</p>
            <h1>{1+1}</h1>
           {/*ternery operator...*/}
           <h1>{i == 1 ? 'True': 'False'}</h1>
         </div>
      );
   }
}