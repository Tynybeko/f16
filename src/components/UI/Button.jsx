import './style.scss';


export function Button({ children, ...attr }) {

    return (
        <button {...attr}>
            {children}
        </button>
    )
}