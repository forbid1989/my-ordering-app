import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import MainMenuLayout from './components/Layout/MainMenuLayout/MainMenuLayout';
import MainMenuPage from './containers/MainMenuPage/MainMenuPage';
import ItemDetailLayout from './components/Layout/ItemDetailLayout/ItemDetailLayout';
import ItemDetailPage from './containers/ItemDetailPage/ItemDetailPage';
import GetItemLayout from './components/Layout/GetItemLayout/GetItemLayout';
import GetItemPage from './containers/GetItemPage/GetItemPage';
import OrderNowPageLayout from './components/Layout/OrderNowPageLayout/OrderNowPageLayout';
import OrderNowPage from './containers/OrderNowPage/OrderNowPage';
import Aux from './hoc/Auxilliary';
import Modal from './components/Modal/Modal'

import images from './assets/images';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      dataSet : [...images],
      mealSelected: null,
      activeMenu : 'Meal',
      currentPage: 'Menu',
      readyToOrder: false,
      modalMessage: {header:"",message:""}
    }
    
  }

  componentDidMount() {

    M.AutoInit();

  }

  checkIfReadyToOrder = () => {

    const sum = this.state.dataSet.reduce((total, el) => {

      return total + Math.round(el.quantity);

    }, 0);

    return sum;

  }

  switchPage = (page = null, category = null) => {

    if (category){
      this.setState({activeMenu: category});
    } 

    if (page){
      this.setState({currentPage: page});
    }
    
  }

  updateModalMessages = (header, message) => {

    let newMessages = {header, message}
    this.setState({modalMessage: newMessages});

  }

  updateSelectedCategory = (type) => {

    this.setState({activeMenu: type});

  }

  updateItemQuantityAndNote = (id, qty, note) => {

    let updateOrder = this.state.dataSet[id];
    let updatedDataset = [...this.state.dataSet]
    
    updateOrder.quantity = qty;
    updateOrder.note = note;

    updatedDataset[id] = updateOrder;
    this.setState({dataSet: updatedDataset});

    this.switchPage('Menu');

  }

  addItemQuantity = (id, qty) => {
        
    let updateOrder = this.state.dataSet[id];
    let updatedDataset = [...this.state.dataSet]

    updateOrder.quantity = (qty < 10) ? qty + 1 : 10;
    updatedDataset[id] = updateOrder;
    this.setState({dataSet: updatedDataset});

  }

  removeItemQuantity = (id, qty) => {

    let updateOrder = this.state.dataSet[id];
    let updatedDataset = [...this.state.dataSet]

    updateOrder.quantity = (qty > 0) ? qty - 1 : 0;
    updatedDataset[id] = updateOrder;
    this.setState({dataSet: updatedDataset});

    if(this.checkIfReadyToOrder() <= 0) {
      this.switchPage('Menu');
    }

  }

  updateItemNote = (event, id) => {

    let updateOrder = this.state.dataSet[id];
    let updatedDataset = [...this.state.dataSet]
    updateOrder.note = event.target.value;
    updatedDataset[id] = updateOrder;
    this.setState({dataSet: updatedDataset});

  }

  triggerItemDetailPage = (id) => {

    this.setState({mealSelected: id});
    this.switchPage('ItemDetail');
    
  }

  triggerGetItemPage = () => {

    this.switchPage('GetItemPage');

  }

  renderMenuPage = () => (

    <MainMenuLayout 
      updateSelectedCategory={this.updateSelectedCategory}
      switchPage={this.switchPage}
      checkIfReadyToOrder={this.checkIfReadyToOrder}
      updateModalMessages={this.updateModalMessages}
    >
      <MainMenuPage 
        data={this.state.dataSet} 
        category={this.state.dataSet} 
        selected={this.state.activeMenu}
        triggerItemDetailPage={this.triggerItemDetailPage}
      />
    </MainMenuLayout>

  );

  renderItemDetail = () => (

    <ItemDetailLayout activeMenu={this.state.activeMenu} switchPage={this.switchPage}>
      <ItemDetailPage 
        selectedMeal={this.state.dataSet[this.state.mealSelected]}
        triggerGetItemPage={this.triggerGetItemPage}
      />
    </ItemDetailLayout>

  )

  renderGetItemPage = () => (

    <GetItemLayout switchPage={this.switchPage} selectedMeal={this.state.dataSet[this.state.mealSelected]}>
      <GetItemPage
        selectedMeal={this.state.dataSet[this.state.mealSelected]}
        updateItemQuantityAndNote={this.updateItemQuantityAndNote}
      />
    </GetItemLayout>

  )

  renderOrderNowPage = () => (

    <OrderNowPageLayout switchPage={this.switchPage} updateModalMessages={this.updateModalMessages}>

      <OrderNowPage 
        data={this.state.dataSet}
        addItemQuantity = {this.addItemQuantity}
        removeItemQuantity = {this.removeItemQuantity}
        updateItemNote = {this.updateItemNote}
      />

    </OrderNowPageLayout>

  )

  render() {

    let pageRendered = null;

    if (this.state.currentPage === 'Menu') {

      pageRendered = this.renderMenuPage();

    } else if (this.state.currentPage === 'ItemDetail') {

      pageRendered = this.renderItemDetail();

    } else if (this.state.currentPage === 'GetItemPage') {

      pageRendered = this.renderGetItemPage();

    } else if (this.state.currentPage === 'OrderNow') {

      pageRendered = this.renderOrderNowPage();

    }

    return (

      <Aux>
        <Modal header={this.state.modalMessage.header} des={this.state.modalMessage.message}/>
        {pageRendered}
      </Aux>
      
    );

  }
  
}

export default App;
