import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Reminder = ({reminder, onClick, onDoubleClick}) => {
    return (
        <div className={`task ${reminder.remind ? 'reminder': ''}`} onDoubleClick={() => onDoubleClick(reminder.id)}>
            <h3>{reminder.text} 
                <FaTimes style={{color: 'red'}} 
                    onClick={() => onClick(reminder.id)}/>
            </h3>
            <p>{reminder.day}</p>
        </div>
    )
}

export default Reminder;