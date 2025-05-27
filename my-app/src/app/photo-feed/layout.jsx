import "./style.css"

export default function Layout(props){
    return(
        <>
        
        {props.modal}
        {props.children}
        </>
    )
}