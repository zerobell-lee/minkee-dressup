import './assets/scss/style.scss';
import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './App.css';
import parts from './parts';
import { SketchPicker } from 'react-color'
import subParts from './components/SubPartsComponents';
import PartsLayer from './components/PartsLayer';
import PartsSelection from './components/PartsSelection';
import ResultImage from './components/ResultImage';
import FileUploader from './components/FileUploader';

function App() {

  const domElement = useRef(null);

  const [dressupState, setDressupState] = useState({
    accessoriesB: [],
    makeup: [],
    hairs: [],
    clothes: [],
    weapons: [],
    accessoriesA: [],
    balloon: []
  });
  const [displayResultImage, setDisplayResultImage] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [colorMap, setColorMap] = useState({})
  const [bgColor, setBgColor] = useState("#ffffff")

  const updateDressUp = (item, new_current) => {
    const chosenOnes = dressupState[item]
    let newChosenOnes = []

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

  const renderImage = async () => {
    setDisplayResultImage(true)
    let dataUrl
    for (let i = 0; i < 3; i++) {
      dataUrl = await htmlToImage.toPng(domElement.current)
    }

    setResultImage(dataUrl)
  };

  const closeResultImage = () => {
    setDisplayResultImage(false)
    setResultImage(null)
  }

  const colorParts = (id, color) => {
    setColorMap({ ...colorMap, [id]: color })
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

  const findSubPartsInfo = ({ category, index }) => {
    const ret = parts[category].items.filter(e => e.pointingIndex === index)[0]
    if (ret === undefined || ret === null) {
      return []
    }
    if (ret.subParts === undefined) {
      return []
    }
    return ret.subParts
  }

  const renderPartsLayer = (category, index) => {
    return <PartsLayer category={category} cssIndex={index}>
      {
        findSubPartsInfo({ category: category, index: index }).map((p) => {
          return subParts[p.targetSvg](colorMap[p.id] ? colorMap[p.id] : p.defaultColor[0])
        })}
    </PartsLayer>
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
          {dressupState.accessoriesB.map((chosenOne) => renderPartsLayer("accessoriesB", chosenOne))}
          <div id="body" />
          {
            Object.keys(dressupState).filter(e => e !== "accessoriesB").map((item) =>
              dressupState[item].map((chosenOne) =>
                renderPartsLayer(item, chosenOne)
              )
            )
          }
        </div>

        <Tabs>
          <TabList style={{ marginBottom: 0 }}>
            {Object.keys(parts).map((item) =>
              <Tab style={{ ...parts[item].tabStyle, fontWeight: "bold" }}>{parts[item].label}</Tab>
            )}
            <Tab style={{ color: "#343434", fontWeight: "bold" }}>배경</Tab>
          </TabList>

          {
            Object.keys(parts).map((item) =>
              <TabPanel style={{ ...parts[item].tabStyle, paddingBottom: "10%" }}>
                {
                  <div className='partsTabPanel'>
                    <PartsSelection
                      items={parts[item].items}
                      colorMap={colorMap}
                      activatedParts={dressupState[item]}
                      updateDressUp={(pointingIndex) => updateDressUp(item, pointingIndex)}
                      updatePartsColor={(e) => colorParts(e.id, e.color)}
                    />
                  </div>
                }
              </TabPanel>
            )
          }
          <TabPanel>
            <div id="bgControlPanel">
              <SketchPicker color={bgColor} onChange={updateBgColor} />
              <div style={{ display: 'grid', marginLeft: "10px" }}>
                <input type="button" value="배경 없애기" className='partsButton' onClick={() => clearBgColor()} />
                <FileUploader handleFile={updateBgImg} />
              </div>

            </div>
          </TabPanel>
        </Tabs>
        {displayResultImage && <div id='modalBg' />}
        {displayResultImage && <ResultImage encodedImage={resultImage} closeModal={() => closeResultImage()} />}
        <div id="captureButtonContainer">
          <input type="button" value="Download Image" id="capture" onClick={renderImage} />
        </div>
      </div>
    </div>
  );
}

export default App;
