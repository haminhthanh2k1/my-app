import React from 'react'

function Challenger() {

    const arr1 = [4,3,7,10];
    const arr2 = [6,7,8,9];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if (i === j) {
                console.log(arr1[i] + arr2[j])
            }
            return false
        }
    }

  return (
    <>
    
    </>
  )
}

export default Challenger
