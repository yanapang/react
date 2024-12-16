export default function CoreConcepts (props) {
    //react get all the props as one object. (props)
    //or it can also be used with destructuring javascript methods ({title, description, image})
    return (
        <li>
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}