import React from 'react';
import Extra from './Extra';
import icon1 from '../../assects/icon/icon1.png'
import icon2 from '../../assects/icon/icon2.png'
import icon3 from '../../assects/icon/icon3.png'
const ExtraSection = () => {
    const cardData = [
        {
            id: 1,
            name: 'EMI up to 36 month',
            icon: icon2,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Secure Payment',
            icon: icon3,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: '100% Genuine Product',
            icon: icon1,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white mt--20 mb-8'>
            {
                cardData.map(ex => <Extra
                    key={ex.id}
                    section={ex}
                ></Extra>)
            }
        </div>
    );
};

export default ExtraSection;