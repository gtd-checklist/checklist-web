import React from 'react';
import { connect } from 'react-redux';

import { InfoPage } from '../ui/InfoPage';
import back from '../img/back-coming-soon.jpg';

const Stub = () => <InfoPage backImg={back} bgColor="secondary" headerText="Скоро..." mainText="Мы в процессе разработки этой страницы..." />;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stub);
