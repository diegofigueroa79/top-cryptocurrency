import styles from '../../pages/detail/styles.module.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function CryptoDetail() {
  const { slug } = useParams();
  const [ coin, setCoin ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  useEffect( () => {
    async function getCoinDetail() {
      let url = `/coins/${slug}`;
      try {
        let response = await fetch(url);
        if (response.ok) {
          let data = await response.json();
          setCoin(data);
        }
        else {
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

    getCoinDetail();
  }, [])

  let detailComponent =
    (
      <>
        <div className={styles.titleContainer}>
          <img src={coin.logo} alt="logo" />
          <div className={styles.name}>
            <span>{coin.name}</span>
            <span>{coin.symbol}</span>
          </div>
        </div>

        <div className={styles.priceContainer}>
          <div className={styles.priceTitle}>
            <span>{coin.name} Price ({coin.symbol})</span>
          </div>
          <div className={styles.priceAmount}>
            <span className={styles.price}>{formatter.format(coin.price)}</span>
            <span className={ coin.percent_change_24h < 0 ? (styles.percent + " " + styles.loss) : ( coin.percent_change_24h > 0 ? (styles.percent + " " + styles.gain) : styles.percent ) }>
              {coin.percent_change_24h && coin.percent_change_24h.toFixed(2)}%
            </span>
          </div>
          <div className={styles.priceMetrics}>
            <div className={styles.marketCap}>
              <span className={styles.marketCapTitle}>Market Cap</span>
              <span className={styles.marketCapAmount}>{formatter.format(coin.marketcap)}</span>
            </div>
            <div className={styles.volume}>
              <span className={styles.volumeTitle}>Volume 24h</span>
              <span className={styles.volumeAmount}>{formatter.format(coin.volume)}</span>
            </div>
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionTitle}>
            <span>What is {coin.name} ({coin.symbol})?</span>
          </div>
          <div className={styles.description}>
            <span>{coin.description}</span>
          </div>
        </div>
      </>
    )

  return (
    <div className={styles.metaContainer}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Unexpected Happened...</h1>}
      {!error && detailComponent}
    </div>
  )
}