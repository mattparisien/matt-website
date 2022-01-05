import React, { forwardRef } from 'react'

function Title(props, ref) {
  return (
    <div className='title -isFull' ref={ref}>
				<h1
					className='title_heading -isRelative -headingLarge'
					data-scroll
					data-scroll-speed='6'
					style={{textAlign: 'center'}}
				>
					Matt
				</h1>
			</div>
  )
}

export default forwardRef(Title);
