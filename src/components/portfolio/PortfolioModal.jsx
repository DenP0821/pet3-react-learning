import { FaXmark } from "react-icons/fa6";
import { RemoveScroll } from "react-remove-scroll";

const PortfolioModal = ({ item, isModalOpen, closeModal }) => {
  return (
    <RemoveScroll enabled={isModalOpen}>
      <div className={`portfolio-modal ${isModalOpen ? "active" : ""}`}>
        <div className="portfolio-modal-body">
          <FaXmark className="portfolio-close-btn" onClick={closeModal} />
          <h3>{item.title}</h3>
          <img src={item.imgSrc} alt={item.title} />
          <p>{item.description}</p>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default PortfolioModal;
