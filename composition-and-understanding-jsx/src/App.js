import './App.css';
import Composition from './components/Composition/Composition';
// IMPORTED FOR USING THE CREATEELEMENT METHOD FROM REACT PACKAGE/LIBRARY.
import React from 'react';
// IMPORTED FOR USING THE RENDER METHOD FROM REACTDOM PACKAGE/LIBRARY.
import ReactDOM from 'react-dom';
import ArrowFunc from './components/ArrowFunc/ArrowFunc';

// THE FOLLOWING PROCESS FOR CREATING A REACT COMPONENT IS USED BY REACT IN BACKGROUND TO CREATE A CUSTOM COMPONENT/ELEMENT.
// THIS MEHTOD ALSO EXPLAINS WHY IS IT THAT WE CAN ONLY RETURN ONE HTML ELEMENT IN A REACT COMPONENT FUNCTION.

// THE CREATE ELEMENT MEHTOD OF REACT WHICH TAKES THREE ARGUMENTS FIRST IS HTML TAG NAME, SECOND IS PROPERTIES SUCH AS STYLE,
// THIRD IS THE CONTENT OF THAT ELEMENT(WHICH CAN BE HTML).
let demo = React.createElement(
    "div", { style: { color: "black", fontWeight: "600", backgroundColor: "yellow", padding: "1rem" } }, "First element created using createElement"
)

// USING THE RENDER METHOD FROM REACTDOM TO RENDER THAT ELEMENT CREATED USING CREATEELEMENT AT SOME LOCATION IN DOM.
// IN THIS CASE WE ARE RENDERING INSIDE THE HTML ELEMENT WITH CREATEEL ID.
ReactDOM.render(
    demo,
    document.getElementById('createEl')
);


function App() {
  return (
    <div className="main-container">
        <h1 className="main-heading">THE COMPOSITION AND CLOSER LOOK AT REACT JSX AND OTHER IMPROVISATIONS.</h1>

        {/* USING COMPOSITION TO PASS HTML/REACT COMPONENT INSIDE THE COMPONENT TAGS AS PROPS.CHILDREN. */}
        {/* THE REACT COMPONENT CREATED FOR EXAMPLE OF COMPOSITION IN REACT JS. */}
        <Composition>
            {/* THE VALUE/CONTENT OF THE PROPS.CHILDREN IS WRITTEN HERE. */}
            <div>
                <p>THE CONTENT INSIDE THE TAGS OF THE CUSTOM REACT COMPONENT.</p>
            </div>
        </Composition>

        {/* THE CREATE ELEMENT METHOD TO CREATE A REACT COMPONENT. */}
        <div id="createEl"></div>

        {/* THE REACT COMPONENT WHICH WAS MADE USING ARROW FUNCTION. */}
        <ArrowFunc />
    </div>
  );
}

export default App;
