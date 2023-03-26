import { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class Layout extends Component<{ children: React.ReactNode }> {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
