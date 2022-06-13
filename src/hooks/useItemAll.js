import { useEffect, useState } from "react";

const useItemAll = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://stark-sea-67117.herokuapp.com/itemAll")
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(false);
  }, []);
  return [items, setItems, isLoading];
};

export default useItemAll;
