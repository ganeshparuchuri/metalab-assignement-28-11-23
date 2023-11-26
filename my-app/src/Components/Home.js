import React, { useState } from "react";
import Papa from "papaparse";
// import { useNavigate } from "react-router-dom";
import PrimaryContainer from "./PrimaryContainer";
const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileDetails, setFileDetails] = useState(null);
  //   const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setUploadedFiles((prevFiles) => [
          ...prevFiles,
          { name: file.name, data: result.data },
        ]);
      },
    });
  };

  const handleFileSelection = (file) => {
    setSelectedFile(file);
    setFileDetails(file.data);
  };

  return (
    <PrimaryContainer>
      <div className="HomeContainer">
        <h1>Welcome to the Home Page</h1>
        <input
          className="uploadCsvinput"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
        />
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index} onClick={() => handleFileSelection(file)}>
              {file.name}
            </li>
          ))}
        </ul>

        {selectedFile && (
          <div>
            <h2>Selected File: {selectedFile.name}</h2>
            <table>
              <thead>
                <tr>
                  {Object.keys(fileDetails[0]).map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fileDetails.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PrimaryContainer>
  );
};

export default Home;
