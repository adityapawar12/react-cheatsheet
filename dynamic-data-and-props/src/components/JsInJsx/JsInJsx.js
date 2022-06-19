import './JsInJsx.css';

function JsInJsx(props) {
    // CREATING A VARIABLE INSIDE A COMPONENT FUNCTION.
    return (
        <div className="js-container">
            <h3>USING JS EXPRESSION INSIDE JSX.</h3>
            <p>THE NUMBERS ARE {props.num1} and {props.num2}</p>
            {parseInt(props.num1) > parseInt(props.num2) ? <p>one</p> : <p>two</p> }
            <p>THE ADDITION OF THESE NUMBERS IS {parseInt(props.num1) + parseInt(props.num2)}</p>
            <p>THE SUBSTRACTION OF THESE TWO NUMBERS IS {parseInt(props.num1) - parseInt(props.num2)}</p>
        </div>
    );
}

export default JsInJsx;
