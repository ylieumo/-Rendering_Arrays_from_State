import React from 'react'
const Item = (props) => {
  return (
    <>
        <div>{props.scores}</div>
        <div>{props.date}</div>
    </>
  )
}
export default Item