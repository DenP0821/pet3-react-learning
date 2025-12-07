import { services } from "../../data/services";
import ServiceItem from "./ServiceItem";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Services.css";
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle title="Services" subtitle="Services" />
        <div className="services-wrapper">
          <motion.h3
            className="services-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants("top", 0.5, 50, true)}
          >
            What I provide
          </motion.h3>
          <ul className="services-list">
            <ServiceItem services={services} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
