import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent } from 'apparena-patterns-react';
import styles from './styles.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

export default class Example extends ReactComponent {
  static defaultProps = {
    code: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  getInitState() {
    this.toggleCodeSnippet = this.toggleCodeSnippet.bind(this);
    return {
      showCode: false
    };
  }

  toggleCodeSnippet() {
    this.setState({
      showCode: !this.state.showCode
    });
  }


  render() {
    const { children, code } = this.props;
    return (
      <div className={styles['example-root']}>
        <div title="Show Code Snippet" className={styles.header} onClick={this.toggleCodeSnippet.bind(this)}>
          <h4 className={styles.title}>Example</h4>
          <div className={styles.toggle} onClick={this.toggleCodeSnippet.bind(this)}>
            Show Code
          </div>
        </div>
        {this.state.showCode ?
          <div className={styles['code-block']}>
            <SyntaxHighlighter
              language={'jsx'}
              style={tomorrow}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div> :
          <div className={styles.body}>
            <div>
              {children}
            </div>
          </div>
        }
      </div>
    );
  }
}
