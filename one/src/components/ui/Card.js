import React from 'react'

export default function Card({ skill, sNo }) {

    return (
        <div className='card-container'>
            <h3 className='skills-title'>{sNo} . {skill}</h3>
        </div>
    )
}
