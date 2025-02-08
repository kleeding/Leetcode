import Profile from '../Profile/Profile'
// import './Navbar.css'
import { Link } from 'react-router-dom';

function Home() {
    /** 
        - User Profile - Find api to pull user data and display here
        - Look through a folder of posts from another repository?? and list them in a table
        - Clicking on table name or ">" goes to block post
        - Clicking on table "Solution" goes to github solution
    */

    return (
        <>
            <h1>Home Page</h1>
            <Profile />
        </>
    )
}

export default Home