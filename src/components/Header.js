import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onToggle, onTog}) => {

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button text={onTog ? 'Hide' : 'Show'} onClick={onToggle}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Reminder App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;