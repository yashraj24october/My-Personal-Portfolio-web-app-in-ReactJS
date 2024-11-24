import React from 'react'

const ProjectByCategory = ({category}) => {
  return (
    (category == 'all') ?  <h5>All</h5>: (category == 'simple')? <h5>Simple</h5>:(category == 'react')?<h5>React</h5>:(category == 'next')?<h5>Next</h5>:<h5>Work</h5>
  )
}

export default ProjectByCategory
