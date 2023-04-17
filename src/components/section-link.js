import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionLink() {
  return (
    <div className='d-flex justify-content-center mt-3 section-button-link'>
        <div className='d-flex'>
            <div className='me-3'>
            <a rel="norefferer" href="https://github.com/Jolan95" target="_blank"><button className='btn-link btn-link-linkedin'></button></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/jolan-aubry/"  rel="norefferer"  target="_blank"><button className='btn-link btn-link-github'></button></a>
            </div>
        </div>
    </div>
  )
}
