import React from 'react';
import PropTypes from 'prop-types';
import close from './close.svg';
import './ActiveFiltersBar.css';

const ActiveFiltersBar = (props) => {
  const activeFiltersList = props.activeFilters.map((item) => {
    return (
      <div className="active-filters-bar__filter">
        <div className="active-filters-bar__filter-text">
          {props.filterTypes[item].toUpperCase()}
        </div>
        <button
          className="active-filters-bar__close-btn"
          onClick={(e) => {
            e.preventDefault();
            props.onFilterChange(item);
          }
          }
        >
          <img src={close} alt="" className="active-filters-bar__close-img" />
        </button>
      </div>
    );
  });

  if (activeFiltersList.length > 0) {
    return (
      <div className="active-filters-bar">
        <div className="active-filters-bar__filters-container">
          {activeFiltersList}
        </div>
        <button
          className="active-filters-bar__reset-btn"
          onClick={(e) => {
            e.preventDefault();
            props.onFilterReset();
          }
          }
        >
          Очистить
        </button>
      </div>
    );
  }

  return null;
};

ActiveFiltersBar.propTypes = {
  activeFilters: PropTypes.objectOf(PropTypes.array).isRequired,
  filterTypes: PropTypes.objectOf(PropTypes.object).isRequired,
  onFilterReset: PropTypes.func.isRequired,
};

export default ActiveFiltersBar;
