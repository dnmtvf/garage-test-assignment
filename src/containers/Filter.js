import { connect } from 'react-redux';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import { resetFilter, changeFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    filterTypes: state.filterTypes,
    activeFilters: state.activeFilters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterReset: () => {
      dispatch(resetFilter());
    },
    onFilterChange: (filter) => {
      dispatch(changeFilter(filter));
    },
  };
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterMenu);

export default Filter;
