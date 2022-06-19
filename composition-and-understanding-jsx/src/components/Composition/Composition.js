import './Composition.css';

function Composition(props) {
    return (
        <div className="composition-container">
            <p className="content">
                {/* USING THE BUILT IN PROPS.CHILDREN TO ACCESS THE CONTENT INSIDE THE TAGS OF THIS COMPONENT. */}
                { props.children }
            </p> 
        </div>
    );
}

export default Composition;
