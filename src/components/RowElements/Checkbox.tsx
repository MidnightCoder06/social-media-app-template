import React, { useState } from 'react';

const Checkbox = () => {

    const [check, setCheck] = useState(true);

    return (
        <input type="checkbox" checked={check}></input>
    );
}

export default Checkbox;