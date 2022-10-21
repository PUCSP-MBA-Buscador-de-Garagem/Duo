import { useEffect, useState, useCallback } from 'react'

import { LoginPage } from './page/LoginPage'
import { MyButton } from './components/MyButton'

function App() {
  return (
    <LoginPage name="Vini">
      <MyButton>Hello</MyButton>
    </LoginPage>
  )
}

export default App
