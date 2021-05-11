import { Component } from 'react';
import { connect } from 'react-redux';

class Filters extends Component {
    
    onChangeFilter = e => {
        this.props.setFilter( e.target.value );
    }

    onChangeSort = e => {
        this.props.setOrder( e.target.value );
    }

    onResetAll = () => {
        this.props.resetAll();

        // since I am not using a component state here, only redux actions,
        // I reset directly into the element
        document.getElementById('filters_type').selectedIndex = 0;
        document.getElementById('filters_sort').selectedIndex = 0;
    }

    render(){
        return (
            <div className="filters">
                <div className="filters__controls">
                    <div className="filters__controls__control">
                        <label htmlFor="filters_type">Device Type: </label>
                        <select id="filters_type" onChange={ this.onChangeFilter }>
                            <option value="">All</option>
                            <option value="WINDOWS_WORKSTATION">WINDOWS_WORKSTATION</option>
                            <option value="WINDOWS_SERVER">WINDOWS_SERVER</option>
                            <option value="MAC">MAC</option>
                            <option value="WINDOWS XP">WINDOWS XP</option>
                        </select>
                    </div>

                    <div className="filters__controls__control">
                        <label htmlFor="filters_sort">Sort by: </label>
                        <select id="filters_sort" onChange={ this.onChangeSort }>
                            <option value="">None</option>
                            <option value="System_Name">System Name</option>
                            <option value="HDD_Capacity">HDD Capacity</option>
                        </select>
                    </div>

                    {   ((this.props.filterBy !== null && this.props.filterBy.trim().length > 0) ||
                        (this.props.sortBy !== null && this.props.sortBy.trim().length > 0)) && 
                        
                            <button className="filters__clear" onClick={this.onResetAll}>Clear</button>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filterBy: state.filtersReducer.filterBy,
    sortBy: state.filtersReducer.sortBy
});

const mapDispatchToProps = dispatch => ({
    setFilter: fvalue => dispatch({
        type: 'SET_FILTER',
        payload: fvalue
    }),
    setOrder: ovalue => dispatch({
        type: 'SET_ORDER',
        payload: ovalue
    }),
    resetAll: () => dispatch({ type: 'RESET_ALL' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);