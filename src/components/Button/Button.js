import "./Button.css"

function Button(props){

    const {children, isInput, className, ...rest} = props;

    if(isInput){
       return <input className={`button ${className}`} {...rest} />
    }
    return(<button className={`button ${className}`} {...rest}>
        {children}
    </button>)
}

export default Button;