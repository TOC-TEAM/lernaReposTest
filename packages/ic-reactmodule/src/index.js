import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    console.log(text);
    console.log(text);
    console.log(text);

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}
