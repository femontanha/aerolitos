import React from 'react';
import testimonialsData from './testimonialsData';
import './testimonials.scss';


export default () => (
    <section className="testimonials">
        {
            testimonialsData.map(testimonial => {
                return (
                    <div key={ testimonial.id } className="testimonials__person">
                        <img className="testimonials__person-img" src={`/img/${testimonial.image}`} alt={ testimonial.name } />
                        <div className="testimonials__person-profile">
                            <span className="testimonials__person-profile__podcast">
                                { testimonial.podcast }
                            </span>
                            <p className="testimonials__person-profile__name">
                                { testimonial.name }
                            </p>
                            <p className="testimonials__person-profile__text">
                                { testimonial.text }
                            </p>
                        </div>
                    </div>
                );
            })
        }
    </section>
);
