import React from 'react'
import { StyledParagraph } from './styles/StyledParagraph'

function Paragraph({children}) {
  return (
    <StyledParagraph className="Paragraph">
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
