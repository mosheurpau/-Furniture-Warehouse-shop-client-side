import { useEffect, useState } from "react";

const useItemAll = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://furniture-warehouse-shop-server-side.onrender.com/itemAll")
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(false);
  }, []);
  return [items, setItems, isLoading];
};

export default useItemAll;
