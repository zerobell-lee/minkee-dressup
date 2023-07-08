import './assets/scss/style.scss';
import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import parts from './parts';

function App() {

  const domElement = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domElement.current)

    const link = document.createElement("a");
    link.download = 'minkee.png';
    link.href = dataUrl;
    link.click();
  };

  // ATM you need to manually add new items and update the total values per item 
  const [dressupState, setDressupState] = useState({
    hairs: 0,
    clothes: 0,
    weapons: 0,
    accessoriesA: 0,
  });

  function updateDressUp(item, new_current) {
    setDressupState({
      ...dressupState,
      [item]: new_current
    })
  }

  return (
    <div className="App">
      <div id="container">
        <h1>나만의 민킈를 만들어보자!!!</h1>
        <div id="background" ref={domElement}>
          <div id="body"></div>
          {Object.keys(dressupState).map((item) =>
            <div id={item} className={item + (dressupState[item])} key={item}></div>
          )
          }
        </div>

        <Tabs>
          <TabList>
            {Object.keys(parts).map((item) =>
              <Tab>{parts[item].label}</Tab>
            )}
          </TabList>

          {
            Object.keys(parts).map((item) =>
              <TabPanel>
                {
                  <div className='partsTabPanel'>
                    {
                      parts[item].items.map((subItem) => <input type="button" value={subItem.text} id={item.label + subItem.pointingIndex} className="partsButton" onClick={() => updateDressUp(item, subItem.pointingIndex)} />)
                    }
                  </div>

                }
              </TabPanel>
            )
          }
        </Tabs>
        <input type="button" value="다운로드" id="capture" onClick={downloadImage} />
      </div>
    </div>
  );
}

export default App;
