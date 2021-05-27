import React from 'react';
import Reminder from './Reminder';

const Reminders = ({reminders, onClick, onDoubleClick}) => {
    return (
        reminders.map((rem) => {
            return <Reminder key={rem.id} reminder={rem} 
                onClick={onClick} 
                onDoubleClick={onDoubleClick}/>
        })
    );
}

export default Reminders;