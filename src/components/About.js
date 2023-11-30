import React from "react";

export function About(props) {
  return (
    <div className="container">
      <h1 className="Abouth1">About Our App</h1>
      <p className="paraAbt">
        Welcome to <strong>{props.name}</strong> , where visual exploration
        meets simplicity. Our app is designed to provide users with a seamless
        experience in discovering and enjoying a vast array of images based on
        their search preferences.
      </p>
      <h2 className="Abouth2">Our Mission</h2>
      <p className="paraAbt">
        At {props.name}, our mission is to empower users to easily explore and
        find stunning images from around the world. We believe in the power of
        visual content to inspire, captivate, and enhance the digital
        experience.
      </p>
      <h2 className="Abouth2">How It Works?</h2>
      <p className="paraAbt">
        <strong>Search Images: </strong> Use the search bar on the home page to
        enter any keyword or phrase that interests you. Whether you're into
        landscapes, animals, or abstract art, our app has a diverse collection
        to suit your preferences.
        <br />
        <br />
        <strong>Discover High-Quality Images:</strong> Our app connects to the
        Unsplash API, ensuring that you have access to a vast library of
        high-quality, free-to-use images. Each search delivers a curated
        selection tailored to your query.
        <br />
        <br />
        <strong>Explore and Share:</strong> Click on any image to view it in
        high resolution. Whether you're looking for inspiration, creating
        content, or just enjoying beautiful visuals, you can easily download or
        share your favorite discoveries.
      </p>
      <h2 className="Abouth2">Contact Us</h2>
      <p className="paraAbt">
        Have questions, suggestions, or feedback? We'd love to hear from you!
        Visit our Contact Us page to drop us a message, and our team will get
        back to you as soon as possible.
        <br />
        Thank you for being a part of the {props.name} community. Start
        exploring, discovering, and enjoying the beauty of images today!
      </p>
    </div>
  );
}
