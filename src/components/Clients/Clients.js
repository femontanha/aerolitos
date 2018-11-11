import React from 'react';
import clientsData from './clientsData';
import './clients.scss';


export default () => (
    <section className="clients">
        {
            clientsData.map(client => {
                return (
                    <a
                        href={ client.url }
                        key={ client.id }
                        className="client__feature"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="client__feature-img" src={`/img/clients/${client.image}`} alt={ client.name } />

                        <div className="client__feature-overlay">
                            <p className="client__feature-name">
                                { client.name }
                            </p>
                        </div>
                    </a>
                );
            })
        }
    </section>
);
