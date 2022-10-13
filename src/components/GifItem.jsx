import React from 'react'

const GifItem = ({title, url}) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <span>{title}</span>
    </div>


  )
}

export default GifItem