import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ActiveFiltersBar from '../ActiveFiltersBar/ActiveFiltersBar';
import './FilterMenu.css';
import checkMark from './checkMark.svg';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);

    this.filterMenuToggle = this.filterMenuToggle.bind(this);

    this.state = {
      isFilterMenuOpen: false,
    };
  }

  filterMenuToggle() {
    this.setState({
      isFilterMenuOpen: !this.state.isFilterMenuOpen,
    });
  }

  render() {
    const btnActiveClasses = classNames('filter-menu-bar__btn', { 'filter-menu-bar__btn-active': this.state.isFilterMenuOpen });
    const caretUpClasses = classNames('filter-menu-bar__caret', { 'filter-menu-bar__caret-up': this.state.isFilterMenuOpen });
    const itemsHidedClasses = classNames('filter-menu-bar__menu-items', { 'filter-menu-bar__menu-items-hided': !this.state.isFilterMenuOpen });
    const filterMenuItems = Object.entries(this.props.filterTypes)
      .reduce((acc, cur) => {
        const key = cur[0];
        const value = cur[1];
        const isFilterActive = this.props.activeFilters.includes(key);
        const itemActiveClasses = classNames('filter-menu-bar__item', { 'filter-menu-bar__item-active': isFilterActive });
        const checkMarkHidedClasses = classNames('filter-menu-bar__check-mark', { 'filter-menu-bar__check-mark-hided': !isFilterActive });

        return acc.concat( // eslint-disable-line
          <button
            className={itemActiveClasses}
            key={key}
            onClick={(e) => {
              e.preventDefault();
              this.props.onFilterChange(key);
              this.filterMenuToggle();
            }
            }
          >
            <span className="filter-menu-bar__item-text">{value}</span>
            <div className="filter-menu-bar__item-img"><img src={checkMark} alt="" className={checkMarkHidedClasses} /></div>
          </button>);
      }, []);

    return (
      <div>
        <div className="filter-menu-bar">
          <button
            className={btnActiveClasses}
            onClick={(e) => {
            e.preventDefault();
            this.filterMenuToggle();
            }
            }
          >
            <span className="filter-menu-bar__btn-name-desktop">Тип события</span>
            <span className="filter-menu-bar__btn-name-mobile">Фильтры</span>
            <div className={caretUpClasses} />
          </button>
          <div className={itemsHidedClasses}>
            <div className="filter-menu-bar__item filter-menu-bar__header-mobile">
            Тип события
            </div>
            {filterMenuItems}
          </div>
        </div>
        <div className="acitve-filters-bar-container">
          <ActiveFiltersBar
            activeFilters={this.props.activeFilters}
            onFilterReset={this.props.onFilterReset}
            onFilterChange={this.props.onFilterChange}
            filterTypes={this.props.filterTypes}
          />
        </div>
      </div>
    );
  }
}

FilterMenu.propTypes = {
  filterTypes: PropTypes.objectOf(PropTypes.object).isRequired,
  activeFilters: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
};

export default FilterMenu;
