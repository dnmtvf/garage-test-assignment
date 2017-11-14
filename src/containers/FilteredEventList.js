import { connect } from 'react-redux';
import EventList from '../components/EventList/EventList';

const getFilteredEvents = (eventList, activeFilters) => eventList
  .filter(item => activeFilters.length === 0 || activeFilters.includes(item.type));

const mapStateToProps = (state) => {
  return {
    events: getFilteredEvents(state.events, state.activeFilters),
    filterTypes: state.filterTypes,
  };
};

const FilteredEventList = connect(mapStateToProps)(EventList);

export default FilteredEventList;
