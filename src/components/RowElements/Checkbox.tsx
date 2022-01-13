import React, { useState } from 'react';

const Checkbox = () => {

    const [check, setCheck] = useState(true);

    const handleOnChange = () => {
        setCheck(!check)
    }

    return (
        <input type="checkbox" checked={check} onChange={handleOnChange}></input>
    );
}

export default Checkbox;