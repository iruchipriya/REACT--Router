import React, { useEffect, useState } from 'react';

export default function ItemDetail(match) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`xyz.com/get?ids=${match.params.id}`);
    const item = fetchItem.json();

    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <h1>{item.name} </h1>
      {/* <img src={item.images} alt="No image" /> */}
    </div>
  );
}
