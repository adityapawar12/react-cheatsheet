import './FirstProp.css';

function FirstProp(props) {
    // CREATING A VARIABLE INSIDE A COMPONENT FUNCTION.
    return (
        <div className="prop-container">
            <h3>Using props in JSX.</h3>
            <p>THE VALUE OF FIRST PROP IS {props.firstProp}</p>
            <hr className="divider" />
            <p>THE VALUE OF SECOND PROP IS {props.secondProp}</p>
            <hr className="divider" />
            <p>THE VALUE OF THIRD PROP IS {props.thirdProp}</p>
            <hr className="divider" />
        </div>
    );
}

export default FirstProp;
