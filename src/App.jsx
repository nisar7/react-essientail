import Coreconcept from "./components/Coreconcept";
import Header from "./layouts/header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./layouts/TabButton";
import { useState } from "react";

function App() {

  const [selectedChoice, setSelectedChoice] = useState(null)

  function handleComponentClick(clickedChoice) {
    setSelectedChoice(clickedChoice)
  }

  let tabContent = <p>Please Select Some topic </p>

  if (selectedChoice) {
    tabContent = (<div id="tab-content">
      <h2>{EXAMPLES[selectedChoice]?.title}</h2>
      <p>{EXAMPLES[selectedChoice]?.description}</p>
      <pre>
        <p>
          {EXAMPLES[selectedChoice]?.code}
        </p>
      </pre>
    </div>)
  }




  return (
    <>

      <main>
        <Header></Header>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((val, i) => {

              return (<Coreconcept key = {i} concept={val}
              ></Coreconcept>)

            })}

          </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>

            <TabButton isSelected={selectedChoice === "components"} onClick={() => handleComponentClick("components")}>Components</TabButton>
            <TabButton isSelected={selectedChoice === "jsx"} onClick={() => handleComponentClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedChoice === "props"} onClick={() => handleComponentClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedChoice === "state"} onClick={() => handleComponentClick("state")}>State</TabButton>

          </menu>
          {tabContent}
        </section>


      </main>
    </>
  )
}

export default App;
