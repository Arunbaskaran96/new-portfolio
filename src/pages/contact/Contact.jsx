import classes from "./contact.module.css";

export default function Contact() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Contact</h3>
      <div className={classes.interestContainer}>
        <p>
          I am interested in freelance opportunities especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to contact me using below options.
        </p>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.left}>
          <p className={classes.leftOne}>Let Connect</p>
          <h5 className={classes.leftSecond}>Digitally</h5>
        </div>
        <div className={classes.right}>
          <div className={classes.iconContainer}>
            <a
              href="mailto:arundhi04101996@gmail.com"
              className={classes.text}
              target="blank"
            >
              <img
                className={classes.logo}
                src="https://www.svgrepo.com/show/511917/email-1572.svg"
                alt=""
              />
              Email
            </a>
          </div>
          <div className={classes.iconContainer}>
            <a href="tel:+917539913570" className={classes.text} target="blank">
              <img
                className={classes.logo}
                src="https://www.svgrepo.com/show/533119/mobile.svg"
                alt=""
              />
              Mobile
            </a>
          </div>
          <div className={classes.iconContainer}>
            <a
              href="https://github.com/Arunbaskaran96"
              className={classes.text}
              target="blank"
            >
              <img
                className={classes.logo}
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt=""
              />
              Github
            </a>
          </div>
          <div className={classes.iconContainer}>
            <a
              href="https://www.linkedin.com/in/arun-b-841112271/"
              className={classes.text}
              target="blank"
            >
              <img
                className={classes.logo}
                src="https://www.svgrepo.com/show/57106/linkedin.svg"
                alt=""
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
