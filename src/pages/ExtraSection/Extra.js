import React from 'react';
import useTitle from '../../hooks/title/UseTitle';

const Extra = ({ section }) => {
    useTitle('Review')
    const { name, icon, bgClass } = section;
    return (
        <div className={`card p-6 md:card-side shadow-xl px-6 my-12 ${bgClass}`}>
            <figure>
                <img src={icon} alt="img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

            </div>
        </div>
    );
};

export default Extra;