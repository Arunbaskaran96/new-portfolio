import { useEffect, useState } from "react";
import classes from "./home.module.css";
import Loading from "../../components/loading/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className={classes.container}>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <h3 className={classes.heading}>ABOUT</h3>
          <p className={classes.about}>
            I am a full stack developer with a passion for building beautiful
            and user friendly web-sites.I have a strong understanding for both
            front-end and back-end development, and i am excited to put my
            skills to use in professional settings. I am a quick leaner and a
            team player,and i am confident that i can be valuable assest to any
            development team.
          </p>
          <div className={classes.iconContainer}>
            <a
              href="https://www.linkedin.com/in/arunbaskaran96/"
              target="blank"
            >
              <img
                className={classes.img}
                src="https://www.svgrepo.com/show/57106/linkedin.svg"
                alt="logo-img"
              />
            </a>
            <a href="https://github.com/Arunbaskaran96" target="blank">
              <img
                className={classes.img}
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="logo-img"
              />
            </a>
          </div>
          <div style={{ marginTop: "35px", textDecoration: "none" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1tCtcg3Zax4K0fv5o9yud4VdSDrmMwJ8s/view?usp=sharing"
              target="blank"
              className={classes.btn}
            >
              Resume
            </a>
          </div>
        </>
      )}
    </div>
  );
}
