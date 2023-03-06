import SortingAlgorithm from '@/components/sorting-algorithm'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const App: React.FC = () => {
  return(
    <div className='headerContainer'>
      <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
      <SortingAlgorithm />
    </div>
  )
}

export default App;