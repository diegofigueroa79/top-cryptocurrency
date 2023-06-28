import styles from '../../pages/home/styles.module.scss'

export default function Header() {
  return (
    <header>
      <span>TopCryptoCurrency</span>
        <div className={styles.myLinks}>
          <span>
            <a className={styles.nostyle} href="https://github.com/diegofigueroa79" rel="noreferrer" target="_blank"><i class="devicon-github-original"></i></a>
          </span>
          <span>
            <a className={styles.nostyle} href="https://www.linkedin.com/in/diegofigueroa79/" rel="noreferrer" target="_blank"><i class="devicon-linkedin-plain"></i></a>
          </span>
        </div>
    </header>
  )
}