import { useEffect, useState } from "react";
import classes from "./skill.module.css";
import Loading from "../../components/loading/Loading";

export default function Skill() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loader}>
          <Loading />
        </div>
      ) : (
        <>
          <h3 className={classes.heading}>Skills</h3>
          <div className={classes.top}>
            <div className={classes.skillTop}>
              <h6 className={classes.skill}>Web Design</h6>
              <p className={classes.des}>
                I love designs and it's the first step before creating any
                website as I can give layout to my imagination.
              </p>
            </div>
            <div className={classes.skillTop}>
              <h6 className={classes.skill}>Web Development</h6>
              <p className={classes.des}>
                I am a Full Stack Web Developer (MERN) and have quite some
                experience in it as well.
              </p>
            </div>
            <div className={classes.skillTop}>
              <h6 className={classes.skill}>Problem Solving</h6>
              <p className={classes.des}>
                I love solving problems whether it's programming problems or
                real life problems.
              </p>
            </div>
          </div>
          <div>
            <p className={classes.tech}>TECH I AM FAMILIAR WITH</p>
          </div>
          <div className={classes.techContainer}>
            <div className={classes.first}>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/452228/html-5.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Html</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Css</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/452045/js.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>JavaScript</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>React</p>
              </div>
            </div>
            <div className={classes.first}>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/439231/mongodb.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>MongoDB</p>
              </div>

              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/330398/express.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Express</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/439238/nodejs.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Node JS</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/439231/mongodb.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Mongoose</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/439072/babel.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Babel</p>
              </div>
            </div>
            <div className={classes.first}>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://testing-library.com/img/logo-large.png"
                  alt="icon"
                />
                <p className={classes.skillname}>Jest</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/452129/vs-code.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Vs Code</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/353498/bootstrap.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>BootStrap</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/439022/typescript.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Typescript</p>
              </div>
              <div className={classes.skillset}>
                <img
                  style={{ height: "30px" }}
                  src="https://www.svgrepo.com/show/439039/webpack.svg"
                  alt="icon"
                />
                <p className={classes.skillname}>Webpack</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
