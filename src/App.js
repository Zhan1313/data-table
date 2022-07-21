import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchGoods } from './api/fetchGoods'
import {TableFilter} from './сomponents/TableFilter'
import {Pages} from './сomponents/Pages'

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGoods())
    }, [dispatch])

    return (
        <AppStyles>
            <TableFilter/>
            <Pages/>
        </AppStyles>
    )
}

const AppStyles = styled.div`
    * { 
        box-sizing: border-box;
    }
    margin: 0 auto;
    width: 1200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .options {
        select {
            height: 40px;
            width: 100px;
            border-radius: 5px;
            outline: none;
            margin-right: 20px;
            background-color: rgba(238, 250, 255, 0.3);
            font-size: 14px;
        }
        input {
            height: 40px;
            width: 190px;
            border-radius: 5px;
            outline: none;
            border: 1px solid black;
            background-color: rgba(238, 250, 255, 0.3);
        }
    }
    table {
        margin-top: 20px;
        width: 800px;
        border-spacing: 0;
        th {
            font-size: 20px;
            padding: 10px;
            background-color: darkolivegreen;
            color: white;
            cursor: pointer;
            border: 0.5px solid white;
            transition: 0.2s ease;
            :last-child {
                border-right: none
            }
            :nth-child(2) {
                width: 220px;
            }
            :first-child {
                border-left: none
            }
            :hover {
                background-color: deepskyblue;
            }
        }
        td {
            height: 40px;
            border-bottom: 0.5px solid black;
            border-right: 0.5px solid black;
            :last-child {
                border-right: 0.5px solid black;
            }
            :first-child {
                border-left: 0.5px solid black;
            }
            text-align: center;
        }
    }
`