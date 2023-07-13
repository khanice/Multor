import "../styles.css";
import { BiArch, BiAccessibility, BiAperture } from "react-icons/bi";
import { useState } from "react";
import Modal from "./Modal";
const Formdet = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="formdet">
      <div className="details">
        <div className="benefit1">
          <div className="icon">
            <BiArch />
          </div>

          <div className="bdetails">
            <h2>Benefit 1</h2>
            <p>
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation.
            </p>
          </div>
        </div>
        <div className="benefit1">
          <div className="icon">
            <BiAperture />
          </div>

          <div className="bdetails">
            <h2>Benefit 2</h2>
            <p>
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation.
            </p>
          </div>
        </div>
        <div className="benefit1">
          <div className="icon">
            <BiAccessibility />
          </div>

          <div className="bdetails">
            <h2>Benefit 3</h2>
            <p>
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation.
            </p>
          </div>
        </div>
      </div>
      <div className="form">
        <h1>Schedule an Appointment</h1>
        <p>
          Here, let visitors know what will happen when they complete your form.
        </p>
        <input
          type="text"
          className="fname"
          placeholder="First Name"
          required
        />
        <input type="text" className="lname" placeholder="Last Name" required />
        <input type="email" className="email" placeholder="Email" required />
        <input
          type="number"
          className="mobno"
          placeholder="Mobile no."
          required
        />
        <select className="Appointment" defaultValue="Type Of Appointment">
          <option>Type Of Appointment</option>
          <option>Type 1</option>
          <option>Type 2</option>
          <option>Type 3</option>
        </select>
        <button
          className="submitform"
          type="submit"
          onClick={() => setShowModal(!showModal)}
        >
          Schedule Appointment
        </button>
        {showModal && <Modal />}
      </div>
    </div>
  );
};

export default Formdet;
