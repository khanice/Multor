import "../styles.css";

const Visitor = () => {
  return (
    <div className="visitor">
      <h1 className="visitorhead">Show visitors what they're signing up for</h1>
      <p>
        Include a video or photo from one of your sessions to help people
        understand your service (or just to hype ‘em up).
      </p>
      <video controls>
        <source src="Video by Artem Podrez from Pexels: https://www.pexels.com/video/a-woman-looking-through-the-microscope-5752729/" />
      </video>
    </div>
  );
};
export default Visitor;
