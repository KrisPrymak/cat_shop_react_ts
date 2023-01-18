import React, { useState } from 'react';
import './../App.scss';
import Card from './Card';

const Shop = () => {
    let [feed, setFeed] = useState([
        {id: 1, pretitle: 'Сказочное заморское яство', pretitleSelectedHover: 'Котэ не одобряет?', title: 'Нямушка', taste: 'фуагра', portion: 10, bonus: 'мышь в подарок', description: 'Печень утки разварная с артишоками.', weight: 0.5, isSelected: false, isStocked: true},
        {id: 2, pretitle: 'Сказочное заморское яство', pretitleSelectedHover: 'Котэ не одобряет?', title: 'Нямушка', taste: 'рыбой', portion: 40, bonus: '2 мыши в подарок', description: 'Головы щучьи с чесноком да свежайшая сёмгушка.', weight: 2, isSelected: true, isStocked: true },
        {id: 3, pretitle: 'Сказочное заморское яство', pretitleSelectedHover: 'Котэ не одобряет?', title: 'Нямушка', taste: 'курой', portion: 100, bonus: '5 мышей в подарок заказчик доволен', description: 'Филе из цыплят с трюфелями в бульоне.', weight: 5, isSelected: false, isStocked: false},
    ])

    const onSelect = (id: number) => {
        setFeed([...feed.map(f => f.id === id ? {...f, isSelected: !f.isSelected} : f)])
    }
    return (
        <div>
            <div className='shop'>
            <h3 className='shop__title'>Ты сегодня покормил кота?</h3>
            <div className='shop__cardBox'>
            {feed.map(f => {
                return (
                        <Card key={f.id} state={f} onSelect={onSelect}/>
                )
            })}
            </div>
        </div>
        </div>
    );
};

export default Shop;