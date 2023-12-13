import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>🚀 Branding Excellence</h2>
          <br/>
          <p>
          Embark on a journey with me to explore the 
          unique possibilities that can shape your brand identity. 
          I specialize in delivering unparalleled branding experiences 
          that resonate with your audience.
          </p>
          <br/>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>🚀 Branding Beyond Boundaries</h2>
          <br/>
          <p>
          In the dynamic landscape of design and development, 
          I am committed to generating impactful ideas that transcend 
          conventional norms. Together, we can push the boundaries of 
          your brand's potential.
          </p>
          <br/>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>🚀 Branding for the Future</h2>
          <br/>
          <p>
          In a world driven by constant evolution, 
          I am here to guide your brand towards a future 
          where creativity and functionality converge seamlessly. 
          Let's navigate the ever-changing digital landscape together.
          </p>
          <br/>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>🚀 Branding with Purpose</h2>
          <br/>
          <p>
          Every project I undertake is fueled by a sense of purpose, 
          ensuring that your brand not only grows but leaves a lasting 
          impression. Let's collaborate to create a meaningful narrative for 
          your brand.
          </p>
          <br/>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;