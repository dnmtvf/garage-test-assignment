import React from 'react';
import PropTypes from 'prop-types';
import EventInfo from './EventInfo';

const EventList = ({ events, filterTypes }) => {
  const eventLst = events.map((item) => {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <EventInfo info={item} filterName={filterTypes[item.type]} />
      </div>);
  });

  return (
    <div className="container-fluid">
      <div className="row">
        {eventLst}
      </div>
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterTypes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default EventList;
