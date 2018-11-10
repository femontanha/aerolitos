import React, { Component } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Article from '../Article/Article';
import Company from '../Company/Company';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonials/Testimonials';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.companyRef = React.createRef();
    this.clientsRef = React.createRef();
    this.testimonialsRef = React.createRef();
  }

  handleNavClick = (id) => {
    switch (id) {
      case this.companyRef.current.props.id:
        this.scrollToView(this.companyRef.current.articleRef.current);
        break;
      case this.clientsRef.current.props.id:
        this.scrollToView(this.clientsRef.current.articleRef.current);
        break;
      case this.testimonialsRef.current.props.id:
        this.scrollToView(this.testimonialsRef.current.articleRef.current);
        break;
      default:
        // default;
        break;
    }
  }

  scrollToView = nodeRef => {
    nodeRef.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <main className="app">
        <HeaderNav
          onClick={ this.handleNavClick }
        />
        <Banner />
        <Article
          ref={ this.companyRef }
          id="company"
          name={ 'Porque nos escolher?' }
          quote={ 'edição inteligente' }
          children={ <Company /> }
        />
        <Article
          ref={ this.clientsRef }
          id="clients"
          name={ 'Clientes & Parceiros' }
          quote={ 'Podosfera' }
          children={ <Clients /> }
        />
        <Article
          ref={ this.testimonialsRef }
          id="testimonials"
          name={ 'Depoimentos' }
          quote={ 'Grandes amigos, clientes e parceiros' }
          children={ <Testimonials /> }
        />
        <Footer />
      </main>
    );
  }
}

export default App;
