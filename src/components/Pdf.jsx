import React from 'react'
import document from '../assets/documents/format.pdf'
function Pdf() {
  return (
    <div>
        <embed src={document} type="application/pdf" width="100%" height="600px" />
    </div>
  )
}

export default Pdf