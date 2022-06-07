import React, { createContext } from 'react'

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
import ChildComp from './7_useMemo/childComp'

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  // const [show, setShow] = useState(true)
  return (
    <div>
      {/* <CounterClass/> */}
      {/* <CounterHook/> */}
      {/* <MultiHookState/> */}
      {/* <ComplexHookState/> */}
      {/* <ClassTitle/> */}
      {/* <HookTitle/> */}
      {/* {show && <Subscribe/>} */}
      {/* <button onClick={() => setShow(!show)}>change</button> */}

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
      <ChildComp/>
    </div>
  )
}
