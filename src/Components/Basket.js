import React from 'react'

const Basket = ({ items, onClick }) => {
  return (
    <>
<ul>
      {items.map((item) => (
        <li key={item.id}>
            {item.id}
          {item.name}:
          <button type="button" onClick={() => onClick(item)}>
            {item.is_Favorite ? 'Like' : 'Unlike'}
          </button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Basket