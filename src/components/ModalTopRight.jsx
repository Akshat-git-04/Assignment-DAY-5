import ReactDOM from 'react-dom';

const ModalTopRight = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content top-right" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalTopRight;
