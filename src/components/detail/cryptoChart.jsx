import styles from '../../pages/detail/styles.module.scss'
import { Chart } from 'react-google-charts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function CryptoChart() {
  const { symbol } = useParams();
  const [ quotes, setQuotes ] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)

  const chartOptions = {
    'legend': 'none',
    'candlestick': {
      'fallingColor': { 'strokeWidth': 0, 'fill': "rgb(25, 218, 25)" }, // red
      'risingColor': { 'strokeWidth': 0, 'fill': "rgb(250, 0, 0)" }, // green
    },
  }

  useEffect( () => {
    async function getQuotes() {
      let url = `https://diegofigueroa.pythonanywhere.com/coins/history/${symbol}/day/`
      try {
        let response = await fetch(url);
        if (response.ok) {
          let data = await response.json();
          setQuotes(data);
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

    getQuotes();
  }, [symbol])

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartMode}>
        <span>Bitcoin 1 Day Price Chart (UTC TimeZone)</span>
      </div>
      <div className={styles.chart}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Something Unexpected Happened...</h1>}
        {!error && 
          <Chart
          chartType='CandlestickChart'
          data={quotes}
          width='100%'
          height='100%'
          options={chartOptions}
          />
        }
      </div>
    </div>
  )
}