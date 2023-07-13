import "../styles.css";
import { RiStarSFill } from "react-icons/ri";
const Feedback = () => {
  return (
    <div className="feedback">
      <h5>DON'T JUST TAKE OUR WORD FOR IT</h5>
      <div className="fullfed">
        <div className="fed1">
          <div className="rating">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <h1>
            Share a real testimonial that hits some of your benefits (but isn't
            too sales-y).
          </h1>
          <div className="fedbody">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg"
              alt=""
            />
            <strong>Aquib</strong>
          </div>
        </div>
        <div className="fed2">
          <div className="rating">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <h1>
            Share a real testimonial that hits some of your benefits (but isn't
            too sales-y).
          </h1>
          <div className="fedbody">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg"
              alt=""
            />
            <strong>Aquib</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
