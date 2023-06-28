import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import CryptoList from "../../components/home/cryptoList"
import styles from "./styles.module.scss"

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <CryptoList />
            <Footer />
        </div>
    )
}