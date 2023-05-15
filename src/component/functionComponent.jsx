import { useState } from "react";

const FunctionComponent = ({nama}) => {

    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1)
    }

    return <>
    <h1>{nama} Function Here !!!</h1>
    <button onClick={handlePlus}>-</button>
    <span>{value}</span>
    </>
}

FunctionComponent.defaultProps = {
    nama : "Default"
}
export default FunctionComponent;