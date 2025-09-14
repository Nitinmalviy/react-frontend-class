import React from 'react'

export default function Card({ skill }) {

    return (
        <div className='card-container'>
            <h3 className='skills-title'>{skill}</h3>
        </div>
    )
}
