import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <button
        className="accordion-header"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h4>{title}</h4>
        <span className="accordion-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div className="accordion-body-wrapper">
        {isOpen && (
          <div className="accordion-body">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
