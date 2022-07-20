import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Table } from '../components'

export const TableFilter = () => {

    const items = useSelector(state => state.goods.items)
    const startIndex = useSelector(state => state.goods.startIndex)
    const perPage = useSelector(state => state.goods.perPage)

    const [ column, setColumn ] = useState('name')
    const [ condition, setСondition ] = useState('=')
    const [ inputValue, setInputValue ] = useState('')

    const handleInputChange = e => {
        setInputValue(e.target.value)
    }

    const onSelectFilter = (data, searchValue) => {

        if(column === 'name') {
            return data.filter(item => item.title.includes(searchValue.toLowerCase()))
        }

        if(column === 'count') {
            if(searchValue.length === 0) {
                return data
            }
            if(condition === '=') {
                return data.filter(item => item.count === +searchValue)
            }
            if(condition === '<') {
                return data.filter(item => item.count < +searchValue)
            }
            if(condition === '>') {
                return data.filter(item => item.count > +searchValue)
            }
            if(condition === 'contains') {
                return data.filter(item => item.count.toString().includes(searchValue.toLowerCase()))
            }
        }

        if(column === 'distance') {
            if(searchValue.length === 0) {
                return data
            }
            if(condition === '=') {
                return data.filter(item => item.distance === +searchValue)
            }
            if(condition === '<') {
                return data.filter(item => item.distance < +searchValue)
            }
            if(condition === '>') {
                return data.filter(item => item.distance > +searchValue)
            }
            if(condition === 'contains') {
                return data.filter(item => item.distance.toString().includes(searchValue.toLowerCase()))
            }
        }
    }

    const paginatedItems = items.filter((item, index) => index >= startIndex && index < startIndex + perPage)
    const visibleItems = onSelectFilter(paginatedItems, inputValue)
    const searchVisibleItems = onSelectFilter(items, inputValue)
    const showPerPageSearchVisibleItems = searchVisibleItems.filter((item, index) => index < perPage)

    return (
        <>
            <div className="options">
                <select value={column} onChange={e => setColumn(e.target.value)} className="table-select">
                    <option value="name">name</option>
                    <option value="count">count</option>
                    <option value="distance">distance</option>
                </select>
                <select value={condition} onChange={e => setСondition(e.target.value)} className="table-select">
                    <option value="=">equal</option>
                    <option value="<">less</option>
                    <option value=">">more</option>
                    <option value="contains">contains</option>
                </select>
                <input value={inputValue} type="text" onChange={handleInputChange}/>
            </div>
            <Table visibleItems={inputValue ? showPerPageSearchVisibleItems : visibleItems}/>
        </>
    )
}