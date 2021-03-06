import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent } from '../../index';

const Highcharts = require('highcharts');

export default class Chart extends ReactComponent {
  componentDidMount() {
    this.renderChart(this.props.config);
  }

  shouldComponentUpdate(nextProps) {
    this.renderChart(nextProps.config);
    return false;
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  getChart() {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  }

  renderChart(config) {
    if (!config) {
      throw new Error('Config must be specified for this component');
    }
    const chartConfig = config.chart;
    this.chart = new Highcharts[this.props.type]({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this._chart,
      },
    }, this.props.callback);
  }

  render() {
    return <div ref={(c) => { this._chart = c; }} />;
  }
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
};

Chart.defaultProps = {
  type: 'Chart',
};
