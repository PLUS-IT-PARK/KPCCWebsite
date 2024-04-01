import React from 'react'
import document2 from '../assets/documents/PoliticalAffairsCommitte.pdf'
function PacPDF() {
  return (
    <div>
        <embed src={document2} type="application/pdf" width="100%" height="600px" />
    </div>
  )
}

export default PacPDF