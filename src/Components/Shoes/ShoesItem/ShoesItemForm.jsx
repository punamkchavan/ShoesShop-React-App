import './ShoesItemForm.css';
import Input from '../../UI/Input';
import { useRef } from 'react';

export default function ShoesItemForm(){
    return(
        <>
        <form className='form' onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Quatity'
            input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
            }}
        />
        <button>+ Add</button>
        </form>
        </>
    )
}