import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  //RUN WHEN THE COMPONENTS MOUNTS. ONE TIME
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useEffect([]);

  //FETCH CALL
  const fetchItems = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=d794ff86d8d8425f85c4e163c8754b79'
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item => {
        <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}> item.name </Link>
        </h1>;
      })}
    </div>
  );
}
