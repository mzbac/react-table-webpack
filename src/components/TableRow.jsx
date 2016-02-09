import React from 'react';


class TableRow extends React.Component {
    constructor(){
        super();
    }

    render(){

        return (
            <tr>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.fName}</td>
                <td>{this.props.row.lName}</td>
                <td>{this.props.row.age}</td>
                <td>{this.props.row.city}</td>
                <td>{this.props.row.country}</td>
            </tr>
        );
    }
}

export default TableRow;