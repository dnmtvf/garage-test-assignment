import React from 'react';
import PropTypes from 'prop-types';
import getDateMonthName from '../getDateMonthName';
import locationIco from './locationIco.svg';
import './EventInfo.css';

const EventInfo = (props) => {
  return (
    <div className="event-info">
      <div className="event-info__event-name-block">
        <div className="event-info__event-type">{props.filterName}</div>
        <div className="event-info__event-title">{props.info.title}</div>
      </div>
      <div>
        <div className="event-info__event-location">
          <img
            src={locationIco}
            alt=""
            className="event-info__event-location-ico"
          />
          {props.info.location}
        </div>
        <div className="event-info__event-location event-info__event-dates">
          {`${getDateMonthName(props.info.start_date)} -
          ${getDateMonthName(props.info.end_date)}`}
        </div>
        <img src={props.info.image_url} alt={props.info.title} className="event-info__event-img" />
      </div>
    </div>);
};

EventInfo.propTypes = {
  filterName: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default EventInfo;
