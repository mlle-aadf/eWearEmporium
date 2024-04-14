import { useState, useEffect } from 'react';

import Home from './Home/Home';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <>
    <Home />
    </>
  );
}

export default App;
