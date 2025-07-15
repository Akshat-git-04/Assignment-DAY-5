// import { useState, useRef } from 'react';
// import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

// const InfiniteScroll = () => {
//   const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i));
//   const loaderRef = useRef();

//   const loadMore = () => {
//     setTimeout(() => {
//       setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
//     }, 1000);
//   };

//   useInfiniteScroll(loaderRef, loadMore);

//   return (
//     <div className="scroll-container">
//       {items.map((item, idx) => (
//         <div key={idx} className="scroll-item">Item #{item}</div>
//       ))}
//       <div ref={loaderRef} className="loading">Loading more...</div>
//     </div>
//   );
// };

// export default InfiniteScroll;

import { useState, useRef } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const InfiniteScroll = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef();

  const loadMore = () => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=10`)
      .then(res => res.json())
      .then(data => {
        const newArt = data.data.map(art => ({
          id: art.id,
          title: art.title,
          artist: art.artist_title,
          image_id: art.image_id
        }));
        setArtworks(prev => [...prev, ...newArt]);
        setPage(prev => prev + 1);
      })
      .catch(err => console.error("Error fetching art:", err));
  };

  useInfiniteScroll(loaderRef, loadMore);

  return (
    <div className="scroll-container">
      {artworks.map(art => (
        <div key={art.id} className="scroll-item">
          <img
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/300,/0/default.jpg`}
            alt={art.title}
            loading="lazy"
          />
          <h4>{art.title}</h4>
          <p>{art.artist || 'Unknown Artist'}</p>
        </div>
      ))}
      <div ref={loaderRef} className="loading">Loading more art...</div>
    </div>
  );
};

export default InfiniteScroll;
