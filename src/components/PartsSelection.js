import { useState } from "react"
import { ChromePicker } from 'react-color'

const PartsList = ({ selected, items, onChange }) => {
    return <select selected={selected.id} multiple onChange={onChange} className="partsList" size="10" >
        {items.map(e => {
            return <option value={e.id}>{e.text}</option>
        })}
    </select>
}

const PartsDetail = (props) => {
    const { id, activated, onChange, subParts, updateDressUp, index, colorMap } = props

    const renderButton = (activated) => {
        const buttonValue = activated ? "해제" : "장착"
        const className = activated ? "detach-button" : "attach-button"

        return <input type="button" value={buttonValue} onClick={() => updateDressUp(index)} className={className} />
    }

    const handlePartsColorChanged = (subId, color) => {
        onChange({ id: subId, color })
    }

    const resetColor = () => {
        for (const element in subParts) {
            console.log(element)
            onChange({ id: subParts[element].id, color: subParts[element].defaultColor })
        }
    }

    return <div key={`subParts${id}`} className="partsDetail">
        {renderButton(activated)}
        <input type="button" value="기본값으로" className="partsButton" onClick={() => resetColor()} />
        {subParts.map((e, i) => {
            console.log(e.id)
            return <div>
                <div style={{paddingTop: "2%", paddingBottom: "2%"}}>
                    
                    부위 {i + 1}
                    
                </div>
                <ChromePicker color={colorMap[e.id] ? colorMap[e.id] : e.defaultColor} onChange={(color) => handlePartsColorChanged(e.id, color.hex)} />
            </div>
        })}
    </div>
}

const PartsSelection = (props) => {
    const { items, activatedParts, updatePartsColor, updateDressUp, colorMap } = props
    const [selected, setSelected] = useState(items[0])

    const onItemClicked = (event) => {
        console.log(items)
        setSelected(items.filter(e => e.id === event.target.value)[0])
    }

    console.log(selected)

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