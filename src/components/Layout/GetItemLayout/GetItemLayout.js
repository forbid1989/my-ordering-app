import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import GetItemNavbar from '../../Navbar/GetItemNavbar/GetItemNavbar';


const getItemLayout = (props) => (

    <Aux>

        <header>
            <GetItemNavbar switchPage={props.switchPage} selectedMeal={props.selectedMeal}/>
        </header>

        <main>
                
            {props.children}
                
        </main>


    </Aux>

);

export default getItemLayout;