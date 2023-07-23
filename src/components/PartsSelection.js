import { useState } from "react"
import { ChromePicker } from 'react-color'
import './picker.css'

const ListView = (props) => {
    const { items, selected, onChange} = props

    const determineSelected = (id) => {
        if (selected.id === id) return "chosenListViewItem"
        return "listViewItem"
    }

    return <div className="listViewContainer">
        {items.map(e => {
            return <div className={`${determineSelected(e.id)}`} onClick={() => onChange(e.id)}>{e.text}</div>
        })}
    </div>
}

const PartsList = ({ selected, items, onChange }) => {
    return <ListView items={items} selected={selected} onChange={onChange} />
}

const CustomColorPicker = (props) => {
    const { colorMap, subPart, handlePartsColorChanged, setPickerOff } = props

    return <div className="centerModal">
        <ChromePicker color={colorMap[subPart.id] ? colorMap[subPart.id] : subPart.defaultColor[0]} onChange={(color) => handlePartsColorChanged(subPart.id, color.hex)} />
        <input type="button" value="X" className="partsButton" onClick={() => setPickerOff()} />
    </div>
}

const PartsDetail = (props) => {
    const { id, activated, onChange, subParts, updateDressUp, index, colorMap } = props

    const [pickerOn, setPickerOn] = useState(0)

    const renderButton = (activated) => {
        const buttonValue = activated ? "해제" : "장착"
        const className = activated ? "detach-button" : "attach-button"

        return <input type="button" value={buttonValue} onClick={() => updateDressUp(index)} className={className} />
    }

    const handlePartsColorChanged = (subId, color) => {
        onChange({ id: subId, color })
    }

    const determineChosen = (id, color) => {
        if (colorMap[id] === undefined) return ""
        if (colorMap[id] === color) {
            if (color === "#000000") {
                return "chosenColorWhite"
            }
            return "chosenColor"
        }
        return ""
    }

    return <div key={`subParts${id}`} className="partsDetail">
        {renderButton(activated)}
        {subParts.map((e, i) => {
            return <div>
                <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>

                    부위 {i + 1}

                </div>
                <div style={{display: "inline-flex"}}>
                <div id="paletteBoard">
                    {e.defaultColor.map(c => <div style={{ backgroundColor: c }} className={`paletteColor ${determineChosen(e.id, c)}`} onClick={() => handlePartsColorChanged(e.id, c)}></div>)}
                </div>
                </div>
                <div>
                    <div id="customColorBoard">
                        <input type="button" value="Customize" className="partsButton" onClick={() => setPickerOn(i+1)}/>
                    </div>
                </div>
                {(pickerOn === i+1) && <CustomColorPicker subPart={e} colorMap={colorMap} handlePartsColorChanged={handlePartsColorChanged} setPickerOff={() => setPickerOn(0)} />}
            </div>
        })}
    </div>
}

const PartsSelection = (props) => {
    const { items, activatedParts, updatePartsColor, updateDressUp, colorMap } = props
    const [selected, setSelected] = useState(items[0])

    const onItemClicked = (clickedItem) => {
        setSelected(items.filter(e => e.id === clickedItem)[0])
    }

    return <div style={{ display: "flex" }}>
        <PartsList selected={selected} items={items} onChange={onItemClicked} />
        <PartsDetail subParts={selected.subParts ? selected.subParts : []}
            colorMap={colorMap}
            id={selected.id}
            index={selected.pointingIndex}
            updateDressUp={updateDressUp}
            activated={activatedParts.indexOf(selected.pointingIndex) >= 0}
            onChange={updatePartsColor} />
    </div>
}

export default PartsSelection