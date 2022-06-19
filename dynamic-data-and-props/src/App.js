import './App.css';
// During importing a component we also need to specify it's name.
import DynamicData from './components/DynamicData/DynamicData';
import FirstProp from './components/FirstProp/FirstProp';
import JsInJsx from './components/JsInJsx/JsInJsx';

function App() {
  return (
    <div className="main-cont">
      <h1 className="main-heading">
        DYNAMIC DATA AND PROPS CHEATSHEAT EXAMPLE.
      </h1>
        <div>
            <DynamicData />
        </div>
        <div>
            <FirstProp firstProp='Monkey D. Luffy' secondProp='Roronoa Zoro' thirdProp='Vinsmoke Sanji' />
        </div>
        <div>
            <JsInJsx num1="23" num2="3"/>
            <JsInJsx num1="3" num2="36"/>
            <JsInJsx num1="2367" num2="342"/>
        </div>
    </div>
  );
}

export default App;
