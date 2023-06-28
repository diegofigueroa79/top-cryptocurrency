import styles from "../../pages/home/styles.module.scss"

export default function CryptoListHeading() {
    return (
        <div className={styles.cryptoItem}>
            <span className={styles.rank}>#</span>
            <span className={styles.name}>Name</span>
            <span className={styles.price}>Price</span>
            <span className={styles.percentChange}>24h %</span>
            <span className={styles.marketCap}>Market Cap</span>
            <span className={styles.circulatingSupply}>Circulating Supply</span>
            <span className={styles.maxSupply}>Max Supply</span>
        </div>
    )
}