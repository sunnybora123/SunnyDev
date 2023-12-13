import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {Link} from "react-router-dom";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.ibb.co/CWt8Jnp/Screenshot-2023-12-12-at-7-27-14-PM.png",
    desc: "Designed and developed Cara, an E-commerce web application with a responsive interface. Implemented state management using Redux and Redux Persist for seamless user experience, ensuring persistence of user login and cart data on reload. User authentication is secured through JWT, and checkout is facilitated using Stripe. Tech stack includes React.js for the frontend, MongoDB for data storage, Express.js for a robust server, and Node.js for runtime efficiency. The result is a high-performance, secure, and user-friendly E-commerce platform.",
    website:"https://cara-ae389.web.app/",
    github:"https://github.com/sunnybora123/CARA",

  },
  {
    id: 2,
    title: "Snapgram",
    img: "https://i.ibb.co/njKJcbX/Screenshot-2023-12-13-at-5-02-14-PM.png",
    desc: "Developed and designed a responsive social media application allowing users to upload, save, drag and drop, and like posts. Authentication is seamlessly handled through shadcn/ui and appwrite as a backend service tool, ensuring a secure user experience. The application utilizes a tech stack including HTML, CSS, Visual Studio Code, Node.js, JavaScript, and socket.io to provide a dynamic and interactive platform for users to engage with multimedia content.",
    website:"https://snapgram-392d5.web.app/",
    github:"https://github.com/sunnybora123/Snapgram",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://i.ibb.co/NZpNS3w/Screenshot-2023-12-13-at-5-05-31-PM.png",
    desc: "I developed a vibrant E-commerce sneakers website using HTML, CSS, and JavaScript, ensuring an engaging and seamless shopping experience. The user-friendly interface allows customers to explore, select, and purchase their favorite sneakers with ease, creating an enjoyable online shopping journey.",
    website:"https://sneakers-seven-delta.vercel.app/",
    github:"https://github.com/sunnybora123/Sneakers",
  },
  {
    id: 4,
    title: "Nimbus-Sync",
    img: "https://i.ibb.co/y6CTdCy/Screenshot-2023-12-13-at-5-07-09-PM.png",
    desc: "Developed and created a versatile application enabling users to upload and manage files efficiently. The project features comprehensive CRUD functionality, secure authentication through NextAuth middleware, and robust global state management using Zustand. Leveraging Firestore integration, users can confidently perform CRUD operations on various file types, ensuring a secure and seamless experience.",
    website:"https://nimbus-sync.vercel.app/",
    github:"https://github.com/sunnybora123/NimbusSync",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            <a target="_blank" href={item.website} rel="noreferrer">Live Demo</a>
            <a target="_blank" href={item.website} rel="noreferrer">Github</a>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;