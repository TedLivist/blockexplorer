import { useEffect, useState } from 'react';

import './App.css';
import BlockDetails from './components/BlockDetails';
import { alchemy } from './utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transactions from './components/Transactions';
import Account from './components/Account';
import Navbar from './components/Navbar';

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
    <div className="App">
      {/* <div>Block Number: {blockNumber}</div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<BlockDetails />} />
          <Route path="/transactions/:id" element={<Transactions />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
