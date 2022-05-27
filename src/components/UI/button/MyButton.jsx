import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='myButton'>
            {children}
        </button>
    );
};

export default MyButton;