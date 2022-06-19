import './DynamicData.css';

function DynamicData() {
    // CREATING A VARIABLE INSIDE A COMPONENT FUNCTION.
    let varOne = 'Ecosport';
    let varTwo = 'pulsar RS';
    let varThree = 'lamborghini';

    return (
        <div className="dynamic-container">
            <h3>Using value of a variable inside of JSX.</h3>
            <p>The value of first variable is {varOne}</p>
            <hr className="divider" />
            <p>The value of second variable is {varTwo}</p>
            <hr className="divider" />
            <p>The value of third variable is {varThree}</p>
            <hr className="divider" />
        </div>
    );
}

export default DynamicData;
