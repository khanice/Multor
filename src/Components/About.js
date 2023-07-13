import "../styles.css";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
          alt=""
          className="aboutimg"
        />

        <div className="about-details">
          <strong>ABOUT</strong>
          <h1>Some more information about your business</h1>
          <p>
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
