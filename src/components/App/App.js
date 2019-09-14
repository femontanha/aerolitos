import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ReactInstagramFeed from 'react-instagram-feed';
import HeaderNav from '../HeaderNav/HeaderNav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
import Company from '../Company/Company';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import './app.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.companyRef = React.createRef();
    this.clientsRef = React.createRef();
    this.testimonialsRef = React.createRef();
    this.instagramRef = React.createRef();
    this.contactRef = React.createRef();
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
      case this.contactRef.current.props.id:
        this.scrollToView(this.contactRef.current.articleRef.current);
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
        <Header />
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
          theme="dark"
        />
        <Article
          ref={ this.testimonialsRef }
          id="testimonials"
          name={ 'Depoimentos' }
          quote={ 'Grandes amigos, clientes e parceiros' }
          children={ <Testimonials /> }
        />
        <Article
          ref={ this.instagramRef }
          id="instagram"
          name={ 'Instragram' }
          quote={ 'Ei, segue lá @aerolitos_ei' }
          children={
            <ReactInstagramFeed
              className="instagram-feed"
              accessToken="7332816628.d1f2495.265944c38d904951875c5c60a6a78cd1"
              count={10}
              type="user"
              param="self"
              resolution="thumbnail"
              hasLink
              showButton={ false }
            />
          }
          theme="dark"
        />
        <Article
          ref={ this.contactRef }
          id="contact"
          name={ 'Contato' }
          quote={ 'Entre em contato conosco' }
          children={ <Contact /> }
        />
        <Footer />
        <a href="http://bit.ly/WhatsappAerolitosNovo" title="Whatsapp" className="whatsapp-btn">
          <FontAwesomeIcon icon={ faWhatsapp } />
          <span className="whatsapp-btn__text">Chama no Whats</span>
        </a>
      </main>
    );
  }
}

export default App;
