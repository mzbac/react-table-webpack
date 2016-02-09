import React from 'react';


class Pagination extends React.Component {
    constructor(){
        super();
        this.state={};
    }
    componentWillMount(){
        var pages = this.getPages(this.props);
        this.state.pages=pages;
    }
    componentWillReceiveProps(nexProps){
        this.setState({pages:this.getPages(nexProps)});
    }
    getPages(props) {
        var startPage, endPage;
        startPage = Math.max(props.currentPage - Math.floor(props.paginationSize / 2), 1);
        endPage = startPage + Number.parseInt(props.paginationSize) - 1;

        if (endPage > props.totalPages) {
            endPage = props.totalPages;
            startPage = endPage - props.paginationSize + 1;
        }
        var pages = ['First', 'Previous'];
        for (var i = startPage; i <= endPage; i++) {
            if (i > 0)pages.push(i);
        }
        pages.push('Next');
        pages.push('Last');
        return pages;
    }
    render(){
        var list = this.state.pages.map((value)=>{
            var active =this.props.currentPage ==value ? 'active':'';
            return  ( <li key={value} className={active}><a onClick={this.onClick.bind(this,value)} >{value}</a></li>);
        })
        return (
            <nav>
                <ul className="pagination">
                    {list}
                </ul>
            </nav>
        );
    }

    onClick(value,event){
       this.props.changePage(value);
    }
}

export default Pagination;