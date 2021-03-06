import PropTypes from 'prop-types';
import ReactComponent from '../component';

export default class Animate extends ReactComponent {
  componentDidMount() {
    console.warn('Animate is Deprecated. Will be full removed in next major version');
  }

  render() {
    return this.props.children;
  }
}

Animate.propTypes = {
  /**
   * Animate is Deprecated. Will just display the children
   */
  children: PropTypes.node.isRequired,
};
