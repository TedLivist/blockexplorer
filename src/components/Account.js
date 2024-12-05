import React, { useState } from 'react';
import { alchemy, hexToEther } from '../utils';

const Account = () => {

  const [address, setAddress] = useState()
  const [balance, setBalance] = useState()
  const [txCount, setTxCount] = useState()

  const handleSearch = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const balance = await alchemy.core.getBalance(address, "latest")
    setBalance(hexToEther(balance._hex))

    const txCount = await alchemy.core.getTransactionCount(address, "latest")
    setTxCount(txCount)

  }

  return (
    <div>
      <h3>Get balance for an address</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="address" value={address} onChange={handleSearch} placeholder='Enter address' />
        <button type='submit'>Get Balance</button>
      </form>
      <div>
        <br/>
        <div><strong>{address}</strong></div>
        <br/>
        {balance && txCount &&
          <div>
            <div>This address has {balance} ETH</div>
            <p>and</p>
            <div>{txCount} transactions have been sent from this address</div>
          </div>
        }
      </div>
    </div>
  );
}
 
export default Account;