import React from 'react'

export default function Button({ data }) {

    console.log("Button Component .....", data);

    return (
        <div>
            <button>Child Counter {data}</button>
        </div>
    )
}
