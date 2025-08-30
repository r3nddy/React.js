import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link to='/terms' style={{color: "white"}}>Link menuju terms page</Link>
        </div>
    );
}
export default HomePage