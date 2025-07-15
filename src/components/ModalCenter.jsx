import { useModal } from '../hooks/useModal';

const ModalCenter = ({ triggerText = 'Open Center Modal', children }) => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>{triggerText}</button>

      {isOpen && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-content center" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={close}>✕</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCenter;
