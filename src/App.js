import './App.css';
import UploadFile from './components/UploadFile';
import { useRef, useState } from 'react';

function App() {
  const inpFile = useRef();
  const [file, setFile ] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container-fluid pt-4">
      <form onSubmit={handleSubmit}>
        <input ref={inpFile} type='file' name='file' onChange={(e) => setFile(e.target.files[0])}/>
      </form>
      <UploadFile uri='http://localhost/portfoly/upload.php' file={file}/>
    </div>
  );
}

export default App;
