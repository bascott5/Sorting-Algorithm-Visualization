//- - create global context for array and move use reducer to index while keeping the buttons here
//- - hook up visualizer to array global context
//-x- create two seperate sides of the screen

const ControlPanel: React.FC = () => {
    return (
      <div className='headerContainer'>
        <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
        <li className='list'>
            <ul><button>Bubble Sort</button></ul>
            <ul><button>Insertion Sort</button></ul>
            <ul><button>Merge Sort</button></ul>
            <ul><button>Quick Sort</button></ul>
            <ul><button>Selection Sort</button></ul>
            <ul><button>Reset</button></ul>
        </li>
      </div>
    )
  }
  
  export default ControlPanel;

  /*function merge(left: any, right: any) {
    let arrCopy = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrCopy.push(left.shift())
        }
    }
    }*/