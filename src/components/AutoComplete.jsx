import { useAutoComplete } from '../hooks/useAutoComplete';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const options = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const AutoComplete = () => {
  const { query, filtered, handleChange, setQuery } = useAutoComplete(options);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSelect = (item) => {
    setQuery(item);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-container">
      <h3><FaSearch/> Search Indian State or UT:</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          handleChange(e.target.value);
          setShowSuggestions(true);
        }}
        placeholder="Search Indian State or UT..."
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onFocus={() => setShowSuggestions(true)}
        aria-label="Search Indian states or union territories"
      />

      {query && filtered.length === 0 && showSuggestions && (
        <ul className="suggestions">
          <li style={{ color: '#888', fontStyle: 'italic' }}>No matches found</li>
        </ul>
      )}

      {filtered.length > 0 && showSuggestions && (
        <ul className="suggestions">
          {filtered.map((item, idx) => (
            <li
              key={idx}
              onMouseDown={() => handleSelect(item)}
              tabIndex={0}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
