import React from 'react';
import companyData from './companyData';
import './company.scss';

export default () => (
    <>
        <p className="company-description">
            Criada por Leonardo Amaro em 2015, a Aerolitos Edição Inteligente vem produzindo um trabalho consistente e ganhando reconhecimento no mercado ano a ano. Trabalhamos para que você possa desenvolver cada mais o seu conteúdo de maneira profissional e pontual, terceirizando a edição do seu podcast e tendo mais tempo para trabalhar em outras frentes no seu negócio. Para nós, a satisfação do cliente está em primeiro lugar, sempre entregando um trabalho de alta qualidade.
        </p>
        <section className="company">
        {
            companyData.map(company => {
                return (
                    <div key={ company.id } className="company__feature">
                        <p className="company__feature-title">
                            { company.title }
                        </p>
                        <p className="company__feature-description">
                            { company.description }
                        </p>
                    </div>
                );
            })
        }
        </section>
    </>
);
