import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('Component Mounted');
    const intId = setInterval(() => {
      console.log('Interval');
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <div>Hello there</div>;
};

export default CleanupFunction;
