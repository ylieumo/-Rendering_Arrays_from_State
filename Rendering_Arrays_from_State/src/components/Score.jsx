import React from 'react'
import Item from './Item.jsx'
const Score = (props) => {
    console.log(props)
  return (
    <div>
       scores: {props.scores.map(score =>
         <>
         scores= {score.score}
        <br />
         date= {score.date}
         <br />
         <br />
        </>
          
         )}
    </div>
  )
}
export default Score