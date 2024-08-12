const User = (props) => {
    const {gender, name, location} = props
    return (
        <div>
            <p>{gender}</p>
            <p>{name}</p>
            <p>{location}</p>
        </div>
    )
}

export default User