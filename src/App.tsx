// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";

// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import UserCardComponentWithProps from "./components/exercise/UserCardComponentWithProps.tsx";
// import NameChanger from "./components/NameChanger.tsx";
import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";
import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import logo from '/logo.png'

function App() {


  // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
    <>
        <Layout>

                {/*<ClassComponent />*/}
                {/*<FunctionalComponent />*/}
                {/*<ArrowFunctionalComponent />*/}
                {/*<ArrowFunctionalComponentWithPropsType title={"Hello World"}*/}
                {/*description={"Welcome to React into!"}/>*/}

            {/*<h1 className="text-center text-2xl font-bold">Hello</h1>*/}
            {/*<FunctionalComponent />*/}

            {/*<ClassComponentWithState></ClassComponentWithState>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter />*/}
            {/*<UserCardComponentWithProps name={"Athanasios"} surname={"Nikolopoulos"} age={27} title={"Software Engineer"} description={"Junior Full Stack Developer"} photo={logo} />*/}
            {/*<NameChanger />*/}
            <CounterWithMoreStates />
            <CounterAdvanced />
            <CounterWithCustomHook/>
            <CounterAdvancedWithCustomHook/>


        </Layout>

    </>
  )
}

export default App
