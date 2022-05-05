import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby literally drinking vinegar affogato bespoke vinyl gastropub
            iPhone. Readymade etsy selfies prism woke cliche pabst. Subway tile
            chia pop-up kinfolk squid ethical fanny pack tattooed. Kickstarter
            brooklyn typewriter chambray. Live-edge poutine farm-to-table
            vexillologist, wolf keytar letterpress affogato jianbing prism
            banjo. Farm-to-table kogi you probably haven't heard of them 90's,
            pinterest chartreuse tousled occupy live-edge.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
