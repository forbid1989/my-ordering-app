import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import MainMenuNavbar from '../../Navbar/MainMenuNavbar/MainMenuNavbar';
import MainMenuFooter from '../../Footer/MainMenuFooter/MainMenuFooter';

const mainMenuLayout = (props) => (

    <Aux>

        <header>
            <MainMenuNavbar clicked={props.updateSelectedCategory} restaurantName="Steakhouse Restaurant - Table 6"/>
        </header>

        <main>
                
            {props.children}
                
        </main>

        <MainMenuFooter switchPage={props.switchPage} checkIfReadyToOrder={props.checkIfReadyToOrder} updateModalMessages={props.updateModalMessages}/>

    </Aux>

);

export default mainMenuLayout;