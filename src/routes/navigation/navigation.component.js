import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {

    const NAV_LINKS = [
        {
            name: 'SHOP',
            id: 1,
            path: '/shop'
        },
        // {
        //     name: 'Shop',
        //     id: 1,
        //     path: '/shop'
        // },
        // {
        //     name: 'Shop',
        //     id: 1,
        //     path: '/shop'
        // }
    ]


    return (
        <>
            <div className='navigation'>
                <Link to="/" className='logo-container'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    {
                        NAV_LINKS.map(navLink => {
                            const { name, id, path } = navLink
                            return <Link key={id} className='nav-link' to={path}>{name}</Link>
                        })
                    }

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation