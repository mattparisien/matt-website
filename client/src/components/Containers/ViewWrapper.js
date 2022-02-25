import React from 'react'
import InView from 'react-intersection-observer'

function ViewWrapper(props) {
  return (
    <InView>
      {props.children}
    </InView>
  )
}

export default ViewWrapper