/* global Thrift, tutorial */
import React, { PureComponent } from 'react';

import Home from '../views/Home';
import { FORM_NAME, WEB_SITE_REGULAR } from '../constants';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    };

    this.handleHtml = this.handleHtml.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    var transport = new Thrift.Transport('/api');
    var protocol = new Thrift.Protocol(transport);
    var client = new tutorial.ParsingServiceClient(protocol);

    client.parse(data.url, this.handleHtml);
  }

  handleHtml(data) {
    this.setState({
      result: data
    });
  }

  static validate(data) {
    const error = {};

    if (!data.url) {
      error.url = 'Обязательное поле';
    } else if (!WEB_SITE_REGULAR.test(data.url)) {
      error.url = 'Введите корректный путь к сайту';
    }

    return error;
  }

  render() {
    const { result } = this.state;

    const props = {
      form: FORM_NAME,
      validate: HomeContainer.validate,
      onSubmit: this.onSubmit,
      result
    };

    return <Home {...props} />;
  }
}

export default HomeContainer;
