import { useRef } from "react";

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
        <input type="button" value="업로드" onClick={handleClick} className="partsButton"/>
        <input type="file" style={{ display: 'none' }} onChange={handleChange} ref={hiddenFileInput} />
      </>
    )
  };
  
export default FileUploader;