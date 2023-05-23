import { Icon } from "@iconify/react";
import "./Body.css";
import { Fragment, useState } from "react";
// https://www.netguru.com/blog/react-native-heart-animation
function Body() {
  const [liked, setLiked] = useState(false);
  const onHeartPress = () => {
    setLiked((prevStateOfLike) => !prevStateOfLike);
  };

  const year = new Date().getFullYear();

  return (
    <body className="main">
      <section className="section-1">
        <div className="name">
          <div className="first">Alex</div>
          <div className="last">Oh</div>
        </div>
        <div className="links">
          <a className="link" href="https://github.com/alexswo">
            Github
          </a>
          <a className="link" href="https://www.linkedin.com/in/alexoh2">
            LinkedIn
          </a>
          <a className="link" href="https://github.com/alexswo">
            Projects
          </a>
        </div>
      </section>
      <section className="section-2">
        <div className="stats">Site Statistics</div>
      </section>
      <section className="section-3">
        <div className="copyright">© {year}</div>
      </section>
    </body>
  );
}
export default Body;
