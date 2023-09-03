import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Rishabh"}
          feedback={"I'm really inspired by your Problem Management skills."}
        />

        <TestimonialCard
          name={"Sujal"}
          feedback={
            "Your Project Managenment skills are impressive."
          }
        />

        <TestimonialCard
          name={"Aditya"}
          feedback={"I think you are good real world problem solver."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/163/163801.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
