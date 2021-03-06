import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import styles from './index.module.scss';

export default class ProgressTracker extends ReactComponent {
  render() {
    const { children } = this.props;
    const numberSteps = React.Children.count(children);
    const style = { width: `${(100 / numberSteps)}%` };

    const steps = React.Children.map(children, (step, index) => React.cloneElement(step, { ...step.props, style }));

    return (
      <div className={styles['progress-tracker']}>
        <ol className={styles['progress-tracker']}>
          {steps}
        </ol>
      </div>
    );
  }
}

ProgressTracker.propTypes = {
  /**
   * Can be used to render a progress-tracker-steps inside an progress-tracker for instance.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
