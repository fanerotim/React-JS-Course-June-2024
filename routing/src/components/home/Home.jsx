import './Home.scss'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                <h1 className='home-main-heading'>We are glad to see you on our pages</h1>
                <h2 className='home-subheading'>Here you can enjoy everything literature related</h2>
                <div className='nested-routing-nav'>
                    <Link className='nested-btn' to='authors'>Top Authors</Link>
                    <Link className='nested-btn' to='titles'>Top Titles</Link>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Home;