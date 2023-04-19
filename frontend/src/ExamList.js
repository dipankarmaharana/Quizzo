import React from 'react'
import ExamItem from './ExamItem'

const ExamList = () => {
  return (
    <div>
        <h2>Upcoming Exams.</h2>
        <div class="ag-format-container">
        <div class="ag-exams_box">
            <ExamItem/>
        </div>
        </div>
    </div>
  )
}

export default ExamList