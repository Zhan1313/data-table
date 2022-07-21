import React from 'react'

export const DateConverter = ({ isoDate }) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    const formattedDate = new Date(isoDate).toLocaleString('ru', options).split(' ');
    formattedDate.splice(3, 1, 'в');
    const newDate = formattedDate.join(' ');
    return (
        <>
            {newDate}
        </>
    )
}