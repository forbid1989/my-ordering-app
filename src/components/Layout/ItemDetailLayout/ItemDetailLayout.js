import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import ItemDetailNavbar from '../../Navbar/ItemDetailNavbar/ItemDetailNavbar';

const itemDetailLayout = (props) => (

    <Aux>

        <header>
            <ItemDetailNavbar activeMenu={props.activeMenu} switchPage={props.switchPage}/>
        </header>

        <main>
                
            {props.children}
                
        </main>


    </Aux>

);

export default itemDetailLayout;