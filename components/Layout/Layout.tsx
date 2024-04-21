import { ReactElement } from 'react';
import Header from './Navbar'

type Props = {
    children: ReactElement
}

const Layout = ({ children }: Props) => {
    return (
        <div >
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Layout