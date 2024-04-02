import React from 'react'
import document from '../assets/documents/format-C7.pdf'
function Pdf() {
  return (
    <div>
        <embed src={document} type="application/pdf" width="100%" height="830px" />
    </div>
  )
}

export default Pdf