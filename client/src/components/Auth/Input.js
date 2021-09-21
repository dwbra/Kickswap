import React from 'react';


const Input = ({ name, handleChange, label, placeholder, autoFocus, type, handleShowPassword }) => {

    let showPW = '';
    let hidePW = '';

    return (
        <div>
            <input
            name={name}
            onChange={handleChange}
            required
            // fullWidth
            label={label}
            // autoFocus={autoFocus}
            type={type}
            placeholder={placeholder}
            // InputProps={name === 'password' ? {
            //     : (
            //         <div position="end">
            //             <button onClick={handleShowPassword}>
            //                 {type === 'password' ? {showPW} : {hidePW}}
            //             </button>
            //         </div>
            //     )
            // } : null} 
            />
        </div>
    )
};

export default Input