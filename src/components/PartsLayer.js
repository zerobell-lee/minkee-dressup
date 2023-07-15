const PartsLayer = (props) => {
    const className = `${props.category}${props.cssIndex}`

    return <>
        {props.children}
        <div className={className} id={className} key={className} />
    </>
}

export default PartsLayer