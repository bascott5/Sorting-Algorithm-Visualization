import React, { useEffect, Dispatch, SetStateAction } from 'react'
import Visualizer from './visualizer';

interface props {
  arr: number[],
  setArr?: Dispatch<SetStateAction<number[]>>
}

const SortingAlgorithm: React.FC = (): JSX.Element => {
  //Selection sort
  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        setArr(arr => {
          let arrCopy: number[] = [...arr];
          let minIndex: number = i;
          for (let j = i + 1; j < arr.length; j++) {
            if (arrCopy[j] < arrCopy[minIndex]) {
              minIndex = j;
            }
          }
        let temp: number = arrCopy[i];
        arrCopy[i] = arrCopy[minIndex];
        arrCopy[minIndex] = temp;
        
        return arrCopy;
        })

        //document.querySelectorAll('.bars')[i].style.fill = 'grey';
      }, 100 * (i + 1));
    }
  }, []);

  return <Visualizer arr={arr} setArr={setArr}/>
}

export default SortingAlgorithm;