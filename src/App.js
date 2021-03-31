import React, { useState } from 'react';
import QRCode from 'qrcode.react'
import Logo from '../src/assets/onTheCardLogo.png'

const App = () => {
  const [ qrInput, setQrInput] = useState('');

  const handleGetInput = (e) => {
    setQrInput(e.target.value);
  }
  return (
      <div>
      <input type="text" onChange={handleGetInput}/>
      <QRCode 
      value={qrInput}
      level="L" 
      imageSettings={{src:Logo, excavate:true, height: 30, width: 30}}
      />
      </div>
  )
}

export default App;