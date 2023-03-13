import React, { useState, useReducer, useContext, useEffect, createContext } from 'react'
import ControlPanel from '@/components/control-panel';
import SortingAlgorithm from '@/components/sorting-algorithm'
import Visualizer from '@/components/visualizer';

interface state {
    arr: number[]
}

type action =
    | { type: "randomize" }
    | { type: "selection sort" }

const App: React.FC = () => {
  const initialState: object = { arr: [0, 0, 0, 0, 0] }
  const arrContext = createContext(initialState)

  const arrReducer = (state: state, action: action) => {
    switch (action.type) {
        case "randomize":
            for (let i = 0; i < 5; i++) {
                state.arr.pop();
                state.arr.unshift(Math.floor(Math.random() * 5) + 1);
            }
            return {...state, arr: state.arr = [...state.arr.slice()]};

        /*case "bubble sort":
            useEffect(() => {
                for (let i = 0; i < arr.length; i++) {
                  setTimeout(() => {
                    let arrCopy: number[] = [...arr];
                    for (let j= 0; j < arr.length - i - 1; j++) {
                        if (arrCopy[j] > arrCopy[j + 1]) {
                            let temp = arrCopy[j];
                            arrCopy[j] = arrCopy[j + 1];
                            arrCopy[j + 1] = temp;
                        }
                    }
                    return arr = [...arrCopy];
                  }, 100 * (i + 1));
                }
            }, []);

        case "insertion sort":
            useEffect(() => {
                for (let i = 1; i < arr.length; i++) {
                  setTimeout(() => {
                    let arrCopy: number[] = [...arr];
                    let current = arrCopy[i];
                    let j = i - 1;
                    while (j > -1 && current < arrCopy [j]) {
                        arrCopy[j + 1] = arrCopy[j];
                        j--;
                    }
                    arrCopy[j + 1] = current;
                    
                    return arr = [...arrCopy];
                  }, 100 * (i + 1));
                }
            }, []);

        case "merge sort":
            useEffect(() => {
                for (let i = 0; i < arr.length; i++) {
                    setTimeout(() => {
                        let arrCopy: number[] = [...arr];
                        const mid = arr.length / 2;
                        if (arr.length < 2) {
                            return arrCopy
                        }
        
                        const left = arrCopy.splice(0, mid);
                        return merge(MergeSort(left), MergeSort(arr))
                  }, 100 * (i + 1));
                }
            }, []);

        case "quick sort":
            useEffect(() => {
                for (let i = 0; i < arr.length; i++) {
                    setTimeout(() => {
                        let arrCopy: number[] = [...arr];
                        if (arr.length <= 1) return arrCopy;
                        let pivot = arrCopy[0];
                        let left = arr.filter(x => x < pivot);
                        let right = arr.filter(x => x > pivot);
        
                        return [...left, pivot, ...right];
                    }, 100 * (i + 1));
                }
            }, []);*/

        case "selection sort":
            useEffect(() => {
                for (let i = 0; i < state.arr.length; i++) {
                    setTimeout(() => {
                        let minIndex = i;
                        for (let j = i + 1; j < state.arr.length; j++) {
                            if (state.arr[j] < state.arr[minIndex]) {
                                minIndex = j;
                            }
                        }
                        if (minIndex !== i) {
                            [state.arr[i], state.arr[minIndex]] = [state.arr[minIndex], state.arr[i]];
                        }
        
                        return {...state, arr: state.arr = [...state.arr.slice()]};
                    }, 100 * (i + 1));
                }
            }, []);
        }
    }

    const [state, dispatch] = useReducer<any>(arrReducer, initialState);
    return (
        <div className='container'>
            <ControlPanel />
            <SortingAlgorithm />
        </div>
    )
}

export default App;