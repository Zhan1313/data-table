import React from "react";
import './App.css';
import { Table } from "./Components/Table/Table";
import {useState} from "react";
import Paginator from "./Components/Table/Paginator";
import _ from 'lodash'
import TableSearch from "./Components/Table/TableSearch";


class App extends React.Component {
    state = {
        data: [],
        sortDirection: 'asc', // desc
        sortField: 'name',
        searchText: '',
        currentPage: 0
    }
    fetchData = someData => {
        this.setState({data: someData})
    }

    onSort = sortField => {
        //console.log(sortField)
        const clonedData = this.state.data.concat();
        const sortType = this.state.sortDirection === 'asc' ? 'desc' : 'asc'

        const orderedData = _.orderBy(clonedData, sortField, sortType)
        this.setState({data: orderedData, sortDirection: sortType, sortField});
    }

    searchHandler = searchText => {
        console.log(searchText)
        this.setState({searchText, currentPage: 0});
    }

    getFilteredData() {
        const {data, searchText} = this.state;
        if (!searchText) {
            return data;
        }
        return data.filter(item => {
            return item['name'].toLowerCase().includes(searchText.toLowerCase())

        })
    }

    render() {
        const filteredData = this.getFilteredData();
        console.log('renderApp')
        const dataTest = [{id: 1, date: '12.07.1998', title: 'Almaty', quantity: 3, distance: 32},
            {id: 2, date: '12.07.1998', title: 'Taraz', quantity: 11, distance: 333},
            {id: 3, date: '12.07.1998', title: 'Oral', quantity: 5, distance: 444}]

        return (
            <div className="container">
                <TableSearch onSearch={this.searchHandler}/>
                <Table data={filteredData} onSort={this.onSort}/>
                <Paginator totalItemsCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage} onPageChanged={this.props.onPageChanged}/>
                <button onClick={() => this.fetchData(dataTest)}>Fetch</button>
            </div>
        );
    }
}

export default App;
