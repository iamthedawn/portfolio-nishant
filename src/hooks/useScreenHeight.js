import { useEffect, useState } from "react";

const useScreenHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };
    
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);


  return { height };
};

export default useScreenHeight;
