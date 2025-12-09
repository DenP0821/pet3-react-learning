import { motion } from "motion/react";
import { aboutImg } from "../../assets/images";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import { slideInVariants } from "../../utils/animation";
import { profList } from "../../data/profList";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />
        <div className="about-wrapper">
          <motion.div
            className="about-img"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.9, 100, false)}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideInVariants("right", 0.7, 60, true)}
              >
                I'm Ivan
              </motion.h3>
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideInVariants("right", 0.7, 60, true)}
              >
                A Lead <span>Frontend Developer</span> based in{" "}
                <span>Moscow</span>
              </motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideInVariants("right", 0.7, 60, true)}
              >
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </motion.p>
            </div>
            <ul className="professional-list">
              {profList.map((item, index) => (
                <motion.li
                  className="list-item"
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={index}
                  variants={slideInVariants("right", 0.7, 60, true)}
                >
                  <span className="number">{item.number}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="https://github.com/DenP0821"
              target="_blank"
              className="inner-info-link"
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("right", 0.7, 70, true)}
            >
              Download
              <FaDownload />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
