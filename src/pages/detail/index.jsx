import styles from './styles.module.scss'
import Header from '../../components/base/header.jsx'
import Footer from '../../components/base/footer.jsx'
import CryptoDetail from '../../components/detail/cryptoDetail.jsx'
import CryptoChart from '../../components/detail/cryptoChart.jsx'

export default function Detail() {
  return (
    <div className={styles.container}>
      <Header />
      <CryptoDetail />
      <CryptoChart />
      <Footer />
    </div>
  )
}