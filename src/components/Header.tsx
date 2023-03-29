type HeaderProps = {
    headerText:string;
    subHeaderText ?:string;
}

const Header =({headerText}:HeaderProps)=>{

    return(
        <>
        <h1>{headerText}</h1>
        </>
    )
} 
export default Header;