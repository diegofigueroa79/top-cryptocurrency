import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CryptoItem from './cryptoItem'
import CryptoListHeading from './cryptoListHeading'
import styles from '../../pages/home/styles.module.scss'


export default function CryptoList () {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect( () => {
    async function getCoinList() {
      try{
        let response = await fetch("/coins/");
        if(response.ok){
          let data = await response.json();
          setCoins(data);
        } else {
          setError(true);
        }
      }
      catch(err) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }

    getCoinList();
  }, [])

  let rank = 0
  let coinComponent = coins.map( (coin) => {
    rank++
    return (
      <Link to={`/${coin.slug}/${coin.symbol}`} className={styles.nostyle}>
        <CryptoItem coin={coin} key={coin.id} rank={rank}/>
      </Link>
    )
  })

  return (
    <div className={styles.cryptoList}>
      <CryptoListHeading />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Unexpected Happend...</h1>}
      {!loading && !error && <>{coinComponent}</>}
    </div>
  )
}