

import AceEditor from "react-ace";
import { useState } from "react";

export const Logic = () => {

    const [value, updateValue] = useState("");

    function onChange(newValue) {
        updateValue(newValue);
    }

    return (
        <div className='App'>
            <AceEditor focus value={value} onChange={onChange} name="Id" placeholder="Start coding" />
        </div>
    )

}