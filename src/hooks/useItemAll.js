import { useEffect, useState } from "react";

const useItemAll = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://stark-sea-67117.herokuapp.com/itemAll")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItemAll;
