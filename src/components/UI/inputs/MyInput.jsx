import React from 'react';

const MyInput = ({style, ...props}) => {
    return (
            <input {...props} className={style} type="text" />
    );
};

export default MyInput;