import React, {useState} from "react";




const Home = (props) => {

  

  const clearText = () => {
    let newText = '';
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleUpClick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    
    setText(event.target.value)
  }
  const [text, setText] = useState('')
 

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
    </div>

    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  );
};



export default Home;
