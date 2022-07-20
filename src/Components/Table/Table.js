import React from "react";

export const Table = props => {
    console.log('renderTable')
    return (
        <table className='table'>
            <thead>
            <tr>
                <th>Дата</th>
                <th onClick={() => props.onSort('title')}>Название</th>
                <th onClick={() => props.onSort('quantity')}>Количество</th>
                <th onClick={() => props.onSort('distance')}>Расстояние</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(item => (
                <tr key={item.id}>
                    <th>{item.date} </th>
                    <th>{item.title} </th>
                    <th>{item.quantity} </th>
                    <th>{item.distance} м </th>
                </tr>
            ))}
            </tbody>
        </table>
    )
}