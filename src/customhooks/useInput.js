import { useState } from "react";

const useInput = (initialvalue = '') => {
    const [value, setValue] = useState(initialvalue);
    const reset = () => {
        setValue(initialvalue)
    }
    const bind = {
        value,
        onChange:(e)=>{
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput