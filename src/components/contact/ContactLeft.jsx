import { contactData } from "../../data/contactData";
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react";

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.7, 70, false)}
      >
        Let's discuss your project
      </motion.h2>
      <ul className="contact-list">
        {contactData.map((item, index) => (
          <motion.li
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideInVariants("top", 0.7, 50, true)}
          >
            <h3>
              <item.icon /> {item.title}
            </h3>
            <span>
              <a href={item.link} target="_blank">
                {item.value}
              </a>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;
