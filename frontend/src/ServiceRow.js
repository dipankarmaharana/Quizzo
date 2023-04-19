import React from 'react'

const ServiceRow = (props) => {
  return (
    <div className="service-row">
        <img
            class="c1-img"
            src={props.src}
            alt="code-img"
          />

          <h3>{props.title}</h3>
          <p>
            {props.serviceDesc}
          </p>
    </div>
  )
}

export default ServiceRow