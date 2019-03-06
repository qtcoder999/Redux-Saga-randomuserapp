import React from 'react';
import propTypes from 'prop-types';
 const Button =({onClickHandler,btnName,className})=> {

return (
<div>
   
    <button onClick={onClickHandler} className={className}>{btnName}</button>
    </div>
    )

}


Button.propTypes=
{
    btnName:propTypes.string,
    onClickHandler:propTypes.func,
    className:propTypes.string
}       

export default Button