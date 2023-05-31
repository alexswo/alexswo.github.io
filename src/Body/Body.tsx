import { Icon } from "@iconify/react";

import "./Body.css";
import { Fragment, useEffect, useState } from "react";
//
// https://www.netguru.com/blog/react-native-heart-animation
function Body() {
  useEffect(() => {
    fetch(
      "https://cplbttmpe4.execute-api.us-east-2.amazonaws.com/test/track-visitors-api"
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [liked, setLiked] = useState(false);
  const onHeartPress = () => {
    setLiked((prevStateOfLike) => !prevStateOfLike);
  };

  const year = new Date().getFullYear();

  return (
    <body className="main">
      <section className="container section-1">
        <div className="name">
          <div className="first">Alex</div>
          <div className="last">Oh</div>
        </div>
        <div className="border" />
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
        <div className="copyright">&copy; {year}</div>
      </section>
    </body>
  );
}
export default Body;
