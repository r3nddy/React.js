const ProfileCard = (props) => {
    const { name = 'Anonymous', year, job } = props;
    return (
        <div className="card">
            <p>Name: {name}</p>
            <p>Birth Year: {year}</p>
            {props.job && <p>job: {job}</p>}
        </div>
    );
}

export default ProfileCard