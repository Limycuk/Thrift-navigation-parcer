import React, { PureComponent } from 'react';
import axios from 'axios';

import UrlList from '../views/UrlList';

class UrlListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      urls: []
    };
  }

  componentDidMount() {
    axios({
      url: '/rest/urls',
      method: 'get'
    }).then((response) => {
      console.log(data);
      const { data } = response;

      this.setState({
        urls: data
      });
    });
  }

  render() {
    const { urls } = this.state;

    return <UrlList urls={urls} />;
  }
}

export default UrlListContainer;
