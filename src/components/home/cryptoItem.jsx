import styles from '../../pages/home/styles.module.scss'

export default function CryptoItem({coin, rank}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const numFormatter = new Intl.NumberFormat('en-US');

  return (
    <div className={styles.cryptoItem}>
      <span className={styles.rank}>{rank}</span>
      <span className={styles.name}>
        <img src={coin.logo} alt="logo" />
        <div className={styles.nameText}>
          <span>{coin.name}</span>
          <span className={styles.symbol}>{coin.symbol}</span>
        </div>
      </span>
      <span className={ coin.percent_change_24h < 0 ? (styles.price + " " + styles.loss) : (coin.percent_change_24h === 0 ? styles.price : styles.price + " " + styles.gain) }>
        {formatter.format(coin.price)}
      </span>
      <span className={ coin.percent_change_24h < 0 ? (styles.percentChange + " " + styles.loss) : (coin.percent_change_24h === 0 ? styles.percentChange : styles.percentChange + " " + styles.gain) }>
        { coin.percent_change_24h.toFixed(2) > 0 ? "+" + coin.percent_change_24h.toFixed(2) : coin.percent_change_24h.toFixed(2) }
      </span>
      <span className={styles.marketCap}>{formatter.format(coin.market_cap)}</span>
      <span className={styles.circulatingSupply}>{numFormatter.format(coin.circulating_supply.toFixed(0))}</span>
      <span className={styles.maxSupply}>{ coin.max_supply ? numFormatter.format(coin.max_supply) : "Unlimited"}</span>
    </div>
  )
}