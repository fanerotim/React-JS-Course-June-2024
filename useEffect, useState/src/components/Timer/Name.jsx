const Name = (props) => {

    console.log('name has rerendered')
    
    return (
        <h2>{props.name}</h2>
    )
}

export default Name;

