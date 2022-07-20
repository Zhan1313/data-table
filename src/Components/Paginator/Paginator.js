import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { createPages } from '../utils'
import { setCurrentPage } from '../redux/goods'

export const Pages = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.goods.currentPage)
    const totalCount = useSelector(state => state.goods.totalCount)
    const perPage = useSelector(state => state.goods.perPage)

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    return (
        <PagesStyle>
            {pages.map((page, index) => (
                currentPage === page
                    ?
                    <CurrentPage key={index}>{page}</CurrentPage>
                    :
                    <PageList onClick={() => dispatch(setCurrentPage(page))} key={index}>{page}</PageList>
            ))}
        </PagesStyle>
    )
}

const PagesStyle = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px 0 50px; 
`

const PageList = styled.span`
    border-radius: 100%;
    border: 1px solid grey;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid rgba(142, 232, 255, 0.1);
    background-color: rgba(238, 250, 255, 0.3);
    border-radius: 5px;
    :nth-child(even) {
        margin: 0 10px;
    }
`

const CurrentPage = styled(PageList)`
    background-color: grey;
    color: white;
    font-size: bold;
`