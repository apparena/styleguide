import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';

export default class CardsList extends ReactComponent {
  render() {
    return (
      <div className="t-col-main-content p-1">
        <div className="t-entity-list">
          <div className="card-deck">
            {this.getChildrenArray(this.props.children)}
          </div>
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  /**
   * The cards that should be shown within this list
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
