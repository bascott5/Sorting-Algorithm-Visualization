import SortingAlgorithm from '@/components/sorting-algorithm'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const App: React.FC = () => {
  //TODO: SortingAlgorithm component not showing because JSX is in useEffect component?
  return(
    <div>
      <h1 style={{color:'black'}}>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
      <SortingAlgorithm />
    </div>
  )
}

export default App;