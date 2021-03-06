import { useEffect, useState } from "react";

function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let abort = false;
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();
      if (!abort) {
        setMessage(data.message);
      }
    };
    fetchData();

    return () => {
      abort = true;
    };
  }, []);

  return <div>{message}</div>;
}
export default Test;
