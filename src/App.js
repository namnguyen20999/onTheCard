import React, { useState } from 'react';
import QRCode from 'qrcode.react'
import Logo from '../src/assets/onTheCardLogo.png'
import { Input } from '@material-ui/core'
import { StyledGrid } from '../src/styled-components'

const App = () => {
  const [ qrInput, setQrInput] = useState('');

  const handleGetInput = (e) => {
    setQrInput(e.target.value);
  }
  return (
      <StyledGrid>
        <Input type="text" onChange={handleGetInput} />
          <StyledGrid>
            <QRCode 
              value={qrInput}
              level="L" 
              imageSettings={{src:Logo, height: 30, width: 30}}
            />
          </StyledGrid>
      </StyledGrid>
  )
}

export default App;