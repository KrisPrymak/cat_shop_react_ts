import React, { useState } from 'react';
import './../App.scss';

type PropsType = {
    state: {
        id: number 
        pretitle: string
        pretitleSelectedHover: string
        title: string
        taste: string
        portion: number
        bonus: string 
        description: string 
        weight: number 
        isSelected: boolean
        isStocked: boolean
    }
    onSelect: (id: number) => void
}



const Card: React.FC<PropsType> = (props) => {
    const [pretitle, setPretitle] = useState({ isHover: false, text: props.state.pretitle });
    const onSelect = () => { props.onSelect(props.state.id) };

    const showSelectedHoverTitle = (action: string, text: string) => {
        if (props.state.isSelected) {
            if (action === 'MouseUp') {
                setPretitle({ ...pretitle, isHover: false, text });
            } else if (action === 'MouseEnter') {
                setPretitle({ ...pretitle, isHover: true, text });
            }
        }
        if (action === 'MouseLeave') {
            setPretitle({ ...pretitle, isHover: false, text });
        }
    }


    return (
        <div key={props.state.id} className='card'>
            <div
                onMouseEnter={() => showSelectedHoverTitle('MouseEnter', props.state.pretitleSelectedHover)}
                onMouseLeave={() => showSelectedHoverTitle('MouseLeave', props.state.pretitle)}
                onMouseUp={() => showSelectedHoverTitle('MouseUp', props.state.pretitle)}
                onClick={props.state.isStocked ? onSelect : () => {}} className={props.state.isSelected ? 'card__wrapper card__wrapper-selected' : props.state.isStocked ? 'card__wrapper' : 'card__wrapper card__wrapper-notInStock'}>
                <div className={props.state.isStocked ? 'card__item' : 'card__item cursorAuto card-notInStock::after'}>
                    <p className={pretitle.isHover ? 'card__pretitle pretitleSelected' : 'card__pretitle'}>{pretitle.text}</p>
                    <h4 className={props.state.isStocked ? 'card__title' : 'card__title colorNotInStock'}>{props.state.title}</h4>
                    <p className={props.state.isStocked ? 'card__taste' : 'card__taste colorNotInStock'}>c {props.state.taste}</p>
                    <p className={props.state.isStocked ? 'card__portion' : 'card__portion colorNotInStock'}>{props.state.portion} порций</p>
                    <p className={props.state.isStocked ? 'card__bonus' : 'card__bonus colorNotInStock'}>{props.state.bonus}</p>
                    <div className={props.state.isSelected ? 'card__circle card__circle-selected' : props.state.isStocked ? 'card__circle' : 'card__circle card__circle-notInStock'}>
                        <p className="card__weight">{props.state.weight}</p>
                        <p className="card__kg">кг</p>
                    </div>
                </div>
            </div>
            <div className={props.state.isSelected || !props.state.isStocked ? 'hidden' : 'card__underText'}>Чего сидишь? Порадуй котэ, <span onClick={onSelect} className='card__underText-buy'>купи.</span></div>
            <div className={props.state.isSelected ? 'card__underText-selected' : 'hidden'}>Печень утки разварная с артишоками.</div>
            <div className={props.state.isStocked ? 'hidden' : 'card__underText-notInStock'}>Печалька, {props.state.taste} закончился.</div>
        </div>
    );
};

export default Card;