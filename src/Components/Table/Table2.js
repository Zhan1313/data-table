import React, { useState } from 'react'
import { DateConverter } from '../utils'

export const Table = ({ visibleItems }) => {

    const [ sortConfig, setSortConfig ] = useState(null)

    const sortByKey = key => {
        let direction = 'ascending'
        if ( sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending' ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction })
    }

    const sortedItems = React.useMemo(() => {
        let itemsToFilter = [...visibleItems]
        if (sortConfig !== null) {
            itemsToFilter.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });

        }
        return itemsToFilter;
    }, [sortConfig, visibleItems]);

    return (
        <table>
            <thead>
            <tr>
                <th>Дата</th>
                <th onClick={() => sortByKey('title')}>Название</th>
                <th onClick={() => sortByKey('count')}>Количество</th>
                <th onClick={() => sortByKey('distance')}>Расстояние</th>
            </tr>
            </thead>
            <tbody>
            {sortedItems.map(({id, date, title, count, distance}) => {
                return (
                    <tr key={id}>
                        <td><DateConverter isoDate={date}/></td>
                        <td>{title}</td>
                        <td>{count}</td>
                        <td>{distance}м</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}