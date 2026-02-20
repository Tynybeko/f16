import './style.scss';

export default function Button(props) {
    return (
        <button disabled={props.disabled} onClick={props.click} className='button'>{props.text || 'Button'}</button>
    )
}


