import './assets/scss/style.scss';
import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './App.css';
import parts from './parts';
import { SketchPicker } from 'react-color'

const FileUploader = (props) => {

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = async () => {
      const srcData = fileReader.result;
      await props.handleFile(srcData);
    }
    fileReader.readAsDataURL(fileUploaded);
  };

  return (
    <>
      <input type="button" value="업로드" onClick={handleClick}/>
      <input type="file" style={{display:'none'}} onChange={handleChange} ref={hiddenFileInput}/>
    </>
  )
};

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
    accessoriesB: [],
    makeup: [],
    hairs: [],
    clothes: [],
    weapons: [],
    accessoriesA: [],
    balloon: []
  });

  const [bgColor, setBgColor] = useState("#ffffff")

  const updateDressUp = (item, new_current) => {
    const chosenOnes = dressupState[item]
    let newChosenOnes = []
    
    console.log(new_current)
    console.log(chosenOnes)

    if (chosenOnes.indexOf(new_current) >= 0) {
      newChosenOnes = chosenOnes.filter(e => e !== new_current)
    } else {
      newChosenOnes = [...chosenOnes, new_current]
    }

    setDressupState({
      ...dressupState,
      [item]: newChosenOnes
    })
  }

  const determinePartsButton = (item, index) => {
    if (dressupState[item].indexOf(index) >= 0) {
      return "partsButtonSelected"
    }
    return "partsButton"
  }

  const updateBgColor = (color) => {
    setBgColor(color.hex)
    document.documentElement.style.setProperty('--makerBg', color.hex);
  }

  const clearBgColor = () => {
    setBgColor("#ffffff")
    document.documentElement.style.setProperty('--makerBg', "none");
  }

  const updateBgImg = (encodedImage) => {
    document.documentElement.style.setProperty('--makerBg', `url(${encodedImage})`)
  }

  return (
    <div className="App">
      <div id="container">
        <div id="appHeader">
          <div id="titleContainer">
          <h1>Minkee Maker</h1>
          </div>
        </div>
        <div id="background" ref={domElement}>
          { dressupState.accessoriesB.map((chosenOne) => <div className={"accessoriesB" + chosenOne}></div>) }
          <div id="body"></div>
          {
            Object.keys(dressupState).filter(e => e !== "accessoriesB").map((item) => 
              dressupState[item].map((chosenOne) =>
                <div className={item + chosenOne} key={item + chosenOne}></div>
              )
            )
          }
        </div>

        <Tabs>
          <TabList style={{marginBottom: 0}}>
            {Object.keys(parts).map((item) =>
              <Tab style={{...parts[item].tabStyle, fontWeight: "bold"}}>{parts[item].label}</Tab>
            )}
            <Tab style={{color: "#343434", fontWeight: "bold"}}>배경</Tab>
          </TabList>

          {
            Object.keys(parts).map((item) =>
              <TabPanel style={{...parts[item].tabStyle}}>
                {
                  <div className='partsTabPanel'>
                    {
                      parts[item].items.map((subItem) => <input type="button" value={subItem.text} id={item.label + subItem.pointingIndex} className={determinePartsButton(item, subItem.pointingIndex)} onClick={() => updateDressUp(item, subItem.pointingIndex)} />)
                    }
                  </div>

                }
              </TabPanel>
            )
          }
          <TabPanel>
            <div id="bgControlPanel">
              <SketchPicker color={bgColor} onChange={updateBgColor}/>
              <div style={{display: 'grid'}}>
                <input type="button" value="배경 없애기" onClick={() => clearBgColor()}/>
                <FileUploader handleFile={updateBgImg}/>
              </div>
              
            </div>
          </TabPanel>
        </Tabs>
        <div id="captureButtonContainer">
          <input type="button" value="Download Image" id="capture" onClick={downloadImage} />
        </div>
      </div>
    </div>
  );
}

export default App;
