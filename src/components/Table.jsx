import React from 'react';
import Pagination from './Pagination.jsx';
import TableRow from  './TableRow.jsx';

class Table extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.currentPage = 1;
        var tableSource = [];
        for (let i = 0; i < 100; i++) {
            tableSource.push({
                id: i,
                fName: 'fName' + i,
                lName: 'lName' + i,
                age: i,
                city: 'city' + i,
                country: 'country' + i
            })
        }
        this.state.tableSource = tableSource;
        this.state.pageSize=15;
        this.state.paginationSize=5;
    }

    render() {

        var tableRows = this.state.tableSource.slice((this.state.currentPage-1)*this.state.pageSize+1,(this.state.currentPage-1)*this.state.pageSize+this.state.pageSize+1).map((value)=> {
            return <TableRow key={value.id} row={value}/>
        })
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="6" className="text-center">
                        <Pagination currentPage={this.state.currentPage}
                                    pageSize={this.state.pageSize}
                                    totalItems={this.state.tableSource.length}
                                    totalPages={Math.ceil(this.state.tableSource.length / this.state.pageSize)}
                                    paginationSize={this.state.paginationSize}
                                    changePage={this.changePage.bind(this)}
                        />
                    </td>
                </tr>
                </tfoot>
            </table>
        );
    }

    changePage(value) {
        if (value === 'First')
            return this.setState({currentPage: 1})

        if (value === 'Previous')
            return this.setState({currentPage: (this.state.currentPage - 1)<1?1:this.state.currentPage - 1})
        if (value === 'Next')
            return this.setState({currentPage: (this.state.currentPage + 1)>Math.ceil(this.state.tableSource.length / this.state.pageSize)?Math.ceil(this.state.tableSource.length / this.state.pageSize):this.state.currentPage + 1})
        if (value === 'Last')
            return this.setState({currentPage: Math.ceil(this.state.tableSource.length / this.state.pageSize)})

        this.setState({currentPage: value})
    }
}

export default Table;
