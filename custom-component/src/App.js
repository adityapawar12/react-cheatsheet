import './App.css';
// WHILE IMPORTING THE FUCNTION/COMPONENT WE ALSO NEED TO SPECIFY FUNCTION'S NAME INSIDE OF IMPORT STATEMENT.
import CustomComponent from './components/CustomComponent/CustomComponent';

// The root component.
// It's a good practice not to write a lot of code inside this component.
function App() {
  return (
    <div className="App">
      {/* Using other react components. */}
        <CustomComponent />
    </div>
  );
}

// Export the component.
export default App;
