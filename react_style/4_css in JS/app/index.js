import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'

import styled, {ThemeProvider} from 'styled-components'

const SButton = styled.button`
  padding: 10px 20px;
  color: grey;
`

// const PrimaryButton = styled.button`
//   padding: 10px 20px;
//   background-color: grey;
// `

// 还可以这样继承
const PrimaryButton = styled(SButton)`
  padding: 10px 20px;
  background-color: grey;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themeColor: "orange", fontSize: "20px"}}>
        App
        <h3>I'm title of App</h3>
        <Home/>
        <Profile/>
        <SButton>button</SButton>
        <PrimaryButton>button</PrimaryButton>
      </ThemeProvider>
    )
  }
}
