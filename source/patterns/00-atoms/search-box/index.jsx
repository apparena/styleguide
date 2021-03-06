import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import i18n from 'i18n-js';
import Input from '../forms/input';
import InputGroup from '../../01-molecules/input-group';
import Icon from '../icons';
import styles from './index.module.scss';
import ReactComponent from '../../react-utils/component';

export default class SearchBox extends ReactComponent {
  render() {
    const {
      typeData, className, refCallback, value, onChangeHandler, ...props
    } = this.props;

    props.className = cx(
      styles.root,
      className,
    );

    return (
      <InputGroup
        {...props}
        id="top-search"
        addon={<Icon className={styles.searchBoxIcon} name="search" />}
      >
        <Input
          placeholder={i18n.t('search.placeholder', { entity: i18n.t(`entities.${typeData.entityType}`) })}
          id="top-search-input"
          className={styles.input}
          refCallback={refCallback}
          defaultValue={value}
          onChange={onChangeHandler}
        />
      </InputGroup>
    );
  }
}

SearchBox.propTypes = {
  /**
   * Css classnames
   */
  className: PropTypes.string,
  typeData: PropTypes.object.isRequired,
  refCallback: PropTypes.func,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

SearchBox.defaultProps = {
  value: '',
};
