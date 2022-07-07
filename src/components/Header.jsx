import React from 'react';

const Header = ({rates}) => {
    return (
        <div className='header_block'>
            <div className='header_values'>USD: {(1/rates.USD).toFixed(3)}</div>
            <div className='header_values'>EUR: {(1/rates.EUR).toFixed(3)}</div>
            <div className='header_values'>PLN: {(1/rates.PLN).toFixed(3)}</div>
            <div className='header_values'>GBP: {(1/rates.GBP).toFixed(3)}</div>
        </div>
    );
};

export default Header;