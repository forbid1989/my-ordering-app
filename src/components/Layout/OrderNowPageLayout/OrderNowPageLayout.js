import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import OrderNowNavBar from '../../Navbar/OrderNowNavBar/OrderNowNavBar';
import OrderNowFooter from '../../Footer/OrderNowFooter/OrderNowFooter';

const orderNowPage = (props) => (

    <Aux>

        <header>
            <OrderNowNavBar switchPage={props.switchPage}/>
        </header>

        <main>
                
            {props.children}
                
        </main>

        <OrderNowFooter updateModalMessages={props.updateModalMessages}/>

    </Aux>

);

export default orderNowPage;