import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { alchemy, hexToEther } from '../utils';

const Transactions = () => {

  const { id } = useParams()
  const [tx, setTx] = useState()

  useEffect(() => {
    const fetchTransaction = async () => {
      const tx = await alchemy.core.getTransaction(id)
      console.log(tx)

      setTx(tx)
      console.log(tx)
    } 

    fetchTransaction()
  }, [id, alchemy])


  return (
    <div>
      <h3>Transaction details</h3>
      {!tx ? (
        <div>Loading...</div>
      ) : (
        <div>
          {console.log(id)}
          <p><div><strong>From:</strong> {tx.from}</div></p>
          <p><div><strong>To:</strong> {tx.to}</div></p>

          <p><div><strong>Hash:</strong> {tx.hash}</div></p>
          <p><div><strong>Confirmations:</strong> {tx.confirmations}</div></p>

          <p><div><strong>Value:</strong> {hexToEther(tx.value._hex)} ETH</div></p>
          <p><div><strong>Max fee per gas:</strong> {hexToEther(tx.maxFeePerGas._hex)} ETH</div></p>

          <p><div><strong>Max priority fee per gas:</strong> {hexToEther(tx.maxPriorityFeePerGas._hex)} ETH</div></p>

          <p><div><strong>Gas limit:</strong> {hexToEther(tx.gasLimit._hex)} ETH</div></p>

          <p><div><strong>Gas Price:</strong> {hexToEther(tx.gasPrice._hex)} ETH</div></p>

          <p><div><strong>Nonce:</strong> {tx.nonce}</div></p>
        </div>
      )}
    </div>
  );
}
 
export default Transactions;