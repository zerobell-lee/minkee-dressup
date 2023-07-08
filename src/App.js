import './assets/scss/style.scss';
import React, { useState } from 'react';

function App() {

  // ATM you need to manually add new items and update the total values per item 
  const [dressupState, setDressupState] = useState({
    hairs: {current: 11, total: 12},
    clothes: {current: 4, total: 5},
    weapons: {current: 3, total: 4},
    accessoriesA: {current: 7, total: 8},
  });

  function next(item){
    let next_num = dressupState[item].current + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < dressupState[item].total ? next_num : 0
    updateDressUp(item, new_current)
  }

  function updateDressUp(item,new_current){
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }

  return (
    <div className="App">
      <h1>나만의 민킈를 만들어보자!!!</h1>
      <div id="container">
        <div id="background">
          <div id="body"></div>
          { Object.keys(dressupState).map((item) => 
                <div id={item} className={item+(dressupState[item].current+1)} key={item}></div>
              )
            } 
        </div>
      </div>

      <div id="controlPanel">
      { Object.keys(dressupState).map((item) => 
          <input type="button" value={"next "+item} key={item} id={"next"+item} onClick={() => next(item)}/>
        )
      }
      </div>
    </div>
  );
}

export default App;
