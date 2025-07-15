import { useState } from 'react';

export const useAutoComplete = (options) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleChange = (value) => {
    setQuery(value);
    const search = value.toLowerCase();
    const results = options.filter((opt) =>
      opt.toLowerCase().includes(search)
    );
    setFiltered(results);
  };

  return { query, filtered, handleChange, setQuery };
};
