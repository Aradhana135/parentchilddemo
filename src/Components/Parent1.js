import React from 'react';
import { useState } from 'react';
import Basket from './Basket';
function Parent1() {
  const [fruits, setFruits] = useState([
    { id: '1', name: 'Apple', isFavorite: false },
    { id: '2', name: 'Oragne', isFavorite: true },
    { id: '3', name: 'Papaya', isFavorite: false },
    { id: '3', name: 'Mango', isFavorite: true },
  ]);

  function handleClick(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });

    setFruits(newFruits);
  }

  return (
    <div>
        <h2>Updating parent component state from child component</h2>
        <h1> Intial state of the Parent component</h1>
        {fruits.map((item)=>{
          return(<> <ul> <li key={item.id}> {item.id} {item.name} : {item.isFavorite ? 'Like' : 'Unlike'}</li>  </ul></>)
        })}
      <h1>Click the below buttons to change the state: </h1>

      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

// function Basket() {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//             {item.id}
//           {item.name}:
//           <button type="button" onClick={() => onClick(item)}>
//             {item.isFavorite ? 'Like' : 'Unlike'}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default Parent1;