const ResultImage = ({ encodedImage, closeModal }) => {
    return <div id="resultModal">
      {encodedImage && <img className='resultImg' src={encodedImage} alt="result" />}
      {encodedImage === null && <div className='loader'></div>}
      <input type="button" className="partsButton" value="X" onClick={() => closeModal()} />
    </div>
  }

  export default ResultImage;