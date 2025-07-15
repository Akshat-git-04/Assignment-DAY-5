import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import ModalCenter from '../components/ModalCenter';
import ModalTopRight from '../components/ModalTopRight';
import Accordion from '../components/Accordion';
import AutoComplete from '../components/AutoComplete';

const Dashboard = () => {
  const topRightModal = useModal();

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(prev => (prev === index ? null : index)); // Toggle
  };

  const accordionItems = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.'
    },
     {
      title: 'What is the Component Lifecycle in React?',
      content: 'React components go through a lifecycle of mounting, updating, and unmounting. Class components use lifecycle methods like componentDidMount, while function components use useEffect to handle side effects during these phases.'
    },
    {
      title: 'Where is AutoComplete used and how is it built?',
      content: 'AutoComplete is built using a custom hook (useAutoComplete). It filters suggestions based on user input. Try it on the Dashboard under "AutoComplete".'
    }
  ];

  return (
    <div className="dashboard">
      <h1>React Pattern Dashboard</h1>

      {/* Center Modal */}
      <ModalCenter triggerText="Open Center Modal">
        <h2>Center Modal</h2>
        <p>This modal appears in the center and manages its own state.</p>
      </ModalCenter>

      {/* Top-Right Modal */}
      <button onClick={topRightModal.open}>Open Top-Right Modal</button>
      <ModalTopRight isOpen={topRightModal.isOpen} onClose={topRightModal.close}>
        <h2>Top-Right Modal</h2>
        <p>This modal appears at the top-right corner.</p>
      </ModalTopRight>

      <h2>AutoComplete</h2>
      <AutoComplete />

      <h2>Accordion</h2>
      {accordionItems.map((item, idx) => (
        <Accordion
          key={idx}
          title={item.title}
          isOpen={openIndex === idx}
          onClick={() => handleAccordionClick(idx)}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

export default Dashboard;
