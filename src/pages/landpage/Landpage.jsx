import { Link } from "react-router-dom";
import classes from "./landpage.module.css";

export default function Landpage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.h1}>Welcome</h1>
          <h5 className={classes.h5}>I'm</h5>
          <h2 className={classes.h2}>Arun .B</h2>
          <h4 className={classes.h4}>Full Stack Developer</h4>
        </div>
        <div className={classes.right}>
          <img
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
            alt="rightimage"
          />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Link to="/navbar/about">
          <img
            className={classes.dropdown}
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dropdown-1667918-2039411.png"
            alt="dropddown"
          />
        </Link>
      </div>
    </>
  );
}
