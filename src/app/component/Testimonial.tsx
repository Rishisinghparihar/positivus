"use client"
import React from 'react'
interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, title, quote }) => {
  return (
    <div className="testimonial">
      <p className="quote">{quote}</p>
      <div className="author">
        <span className="name">{name}</span>
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsData: TestimonialProps[] = [
    {
      name: 'John Smith',
      title: 'Marketing Director at XYZ Corp',
      quote:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    // Add more testimonials here
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;