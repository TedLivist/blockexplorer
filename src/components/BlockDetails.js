import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { alchemy } from '../utils';

const BlockDetails = ({ blockNumber }) => {
  const navigate = useNavigate()
  const [blockDetails, setBlockDetails] = useState({})
  const [isVisible, setVisible] = useState(true)

  const toggleVisibility = () => {
    setVisible(!isVisible)
  }

  useEffect(() => {
    const fetchBlockDetails = async () => {
      const details = await alchemy.core.getBlockWithTransactions(blockNumber)

      setBlockDetails(details)
      console.log(blockDetails)
    } 

    fetchBlockDetails()
  }, [blockNumber])
  return (
    <div>
      <h3>Block details</h3>
      <p><strong>Number:</strong> {blockDetails.number}</p>
      
      <p><strong>Hash:</strong> {blockDetails.hash}</p>
      <p><strong>Miner:</strong> {blockDetails.miner}</p>
      
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide transactions' : 'Show transactions'}
      </button>
 
      {isVisible && 
          <div>
            {blockDetails?.transactions?.map((transaction) => (
              <div
                key={transaction.hash}
                onClick={() => navigate(`/transactions/${transaction.hash}`)}
                className='cursor-pointer'
              >
                <strong>Hash: </strong>{transaction.hash}
                <br/>
                <strong>from: </strong>{transaction.from}
                <br/>
                <strong>to: </strong>{transaction.to}
              </div>
            ))}
            OMo
          </div>
      }

    </div>
  );
}


 
export default BlockDetails;