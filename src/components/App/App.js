import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Article from '../Article/Article';
import Company from '../Company/Company';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonials/Testimonials';
import './app.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Banner />
        <Article
          name={ 'Porque nos escolher?' }
          quote={ 'edição inteligente' }
          children={ <Company /> }
        />
        <Article
          name={ 'Clientes & Parceiros' }
          quote={ 'Podosfera' }
          children={ <Clients /> }
        />
        <Article
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
