// import ViteIntro from "./pages/ViteIntro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {


  return (
    <>
      {/*<ViteIntro/>*/}
        <ClassComponent />
        <FunctionalComponent />
        <ArrowFunctionalComponent />
        <ArrowFunctionalComponentWithPropsType title={"Hello World"}
        description={"Welcome to React into!"}/>
    </>
  )
}

export default App
