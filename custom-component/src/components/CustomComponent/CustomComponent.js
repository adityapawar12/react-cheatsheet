// css file of this component.
import './CustomComponent.css';

// STEPS TO CREATE A CUSTOM COMPONENT.
// STEP 1 : CREATE A FUNCTION WITH SAME NAME AS JS FILE(USE CAMEL CASING).
function CustomComponent() {
// STEP 2 : PASS A RETURN STATEMENT INSIDE THAT FUNCTION WHICH RETURNS SOME JSX/HTML CODE.
    return(
        // HTML/JSX(JS XML) CODE.
        <div>
        {/* className IS THE KEYWORD USED IN REACT INSTEAD OF class KEYWORD IN HTML. */}
            <h1 className='heading'>FIRST CUSTOM COMPONENT</h1>
        </div>
    );
}

// EXPORT THE COMPONENT AS DEFAULT.
export default CustomComponent;
