import React from 'react';
import companyData from './companyData';
import './company.scss';


export default () => (
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
);
