import { useState } from "react";

function useDebounce(cb, delay) {
  const [id, setId] = useState(null);

  return (params) => {
    clearTimeout(id);

    let timeoutId = setTimeout(() => {
      cb(params);
    }, delay);

    setId(timeoutId);
  };
}

export default useDebounce;
