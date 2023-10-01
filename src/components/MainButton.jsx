import React from 'react';

const MainButton = (props) => {
    return (
        <button className={`${props.bgcolor} text-black shadow-md py-3 px-4 rounded-md font-semibold md:ml-3 md:w-[150px] md:h-[50px]`}>
            {props.children}
        </button>
    );
}

export default MainButton;
