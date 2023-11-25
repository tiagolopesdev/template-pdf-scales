import './App.css';
import React from 'react';
import { PDFMakeScale } from './scale-pdf-make';
// import { PDFViewer } from '@react-pdf/renderer';
// import { ScalePDF } from './scale-pdf';

function App() {



  return (
    <PDFMakeScale/>
    // <PDFViewer style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   width: '100%',
    //   height: '100%'
    // }}>
    //   <ScalePDF />
    // </PDFViewer>
  );
}

export default App;
