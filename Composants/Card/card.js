import React from 'react'

export default function card({txt, tache, supprFunc, index}) {
    return (
        <div className='card has-background-primary my-4'>
            <div className="card-content">
                <div className="content">
                    <h3 className="px-4">{tache}</h3>
                    <p className="is-size-4 px-4">{txt}</p>
                    <button onClick={() => supprFunc(index)}className="delete is-large btn-top">X</button>
                </div>
            </div>
        </div>
    )
}
