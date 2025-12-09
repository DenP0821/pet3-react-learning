import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { RemoveScroll } from "react-remove-scroll";

const ServiceModal = ({ item, isActive, closeModal }) => {
  return (
    <>
      <RemoveScroll enabled={isActive}>
        <div className={`service-modal ${isActive ? "active" : ""}`}>
          <div className="service-modal-body">
            <FaXmark className="modal-close-btn" onClick={closeModal} />
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
            <h4>{item.text}</h4>
            <ul>
              {item.list.map((item, index) => {
                return (
                  <li key={index}>
                    <FaCheckCircle />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </RemoveScroll>
    </>
  );
};

export default ServiceModal;
