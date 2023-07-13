import About from "./Components/About";
import Card from "./Components/Card";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import Formdet from "./Components/Formdet";
import Header from "./Components/Header";
import Visitor from "./Components/Visitor";
import "./styles.css";

export default function App() {
  return (
    <div className="body">
      <Header />
      <Formdet />
      <Visitor />
      <Feedback />
      <Card />
      <About />
      <Footer />
    </div>
  );
}
