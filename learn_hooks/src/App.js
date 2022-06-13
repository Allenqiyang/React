import React, { useState, createContext } from 'react'

// import CounterClass from './1_first_hooks/couter_class'
// import CounterHook from './1_first_hooks/counter_hook2'
// import MultiHookState from './2_useState/multi'
// import ComplexHookState from './2_useState/complex'
// import ClassTitle from './3_useEffect/TitleClass'
// import HookTitle from './3_useEffect/TitleHook'
// import Subscribe from './3_useEffect/Subscribe'
// import MultiUseEffect from './3_useEffect/multi_useEffect'
// import ContextHook from './4_useContext/contextHook'
// import About from './5_useReducer/About'
// import Home from './5_useReducer/Home'
// import Callback from './6_useCallback/performance'
// import MemoHook from './7_useMemo/MemoHook'
// import ChildComp from './7_useMemo/childComp'
// import RefHookDemo from './8_useRef/useRefDOM'
// import OtherData from './8_useRef/otherData'
// import ForwardRef from './9_useImperativeHandle/forwardRef'
// import UseImperative from './9_useImperativeHandle/useImperative'
// import UseEffect from './10_useLayoutEffect/useEffect'
// import LayoutEffect from './10_useLayoutEffect/layoutEffect'
// import CustomLifeHook from './11_customHook/customHook'
// import ContextShare from './11_customHook/contextShare'
// import GetPosition from './11_customHook/getPosition'
import LocalStorage from './11_customHook/localStorage'

export const UserContext = createContext()
export const TokenContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {/* <CounterClass/> */}
      {/* <CounterHook/> */}
      {/* <MultiHookState/> */}
      {/* <ComplexHookState/> */}
      {/* <ClassTitle/> */}
      {/* <HookTitle/> */}
      {/* {show && <Subscribe/>} */}

      {/* <MultiUseEffect/> */}
      {/* <UserContext.Provider value={{name: "Allen", age: 18}}>
        <ThemeContext.Provider value={{fontSize: "30px", color: "skyblue"}}>
          <ContextHook/>
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <Home/> */}
      {/* <About/> */}

      {/* <Callback/> */}

      {/* <MemoHook/> */}
      {/* <ChildComp/> */}
      {/* <RefHookDemo/> */}
      {/* <OtherData/> */}

      {/* <ForwardRef/> */}
      {/* <UseImperative/> */}
      {/* <UseEffect/> */}
      {/* <LayoutEffect/> */}
      
      {/* {show && <CustomLifeHook/>} */}
      {/* <UserContext.Provider value={{name: "Allen", age: 18}}>
        <TokenContext.Provider value="yeah">
          <ContextShare/>
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <GetPosition/> */}
      <LocalStorage/>

      <button onClick={() => setShow(!show)}>change</button>
    </div>
  )
}
