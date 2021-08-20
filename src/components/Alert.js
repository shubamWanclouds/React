import React from 'react'

export default function Alert(props) {
    
    const capitalise = (word) => {
        const lower = word.toLower
    }

    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.type}</strong>{props.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
