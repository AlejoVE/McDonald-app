import React from 'react'

export const SquareProductDetails = ({title, icon, content}) => {
    return (
        <div>
            <h4>{title}</h4>
            <label><i className={`fa fa-${icon}`}>{content}</i></label>
        </div>
    )
}
