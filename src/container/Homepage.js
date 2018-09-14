import React, { Component } from 'react';
import {connect} from 'react-redux';
import productActions from '../actions/products'

import logo from '../logo.svg';
import './Homepage.css';

import ProductGrid from '../components/ProductGrid';
import AccessoriesGrid from '../components/AccessoriesGrid';
import ShoppingList from '../components/ShoppingList';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Homepage extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const style = {
      margin: 12,
    };
    
    return (
      <div className="HomepageContainer">
          <div className='ProductsContainer'>
            <div>
              <Paper zDepth={1} style={{padding:'1em'}}>
                <span>Presets: </span>

                <RaisedButton label='UAVFutures $100 Build' primary={true} style={style}
                  onClick={()=>this.props.selectPreset('uav_futures_100')}
                  ></RaisedButton>
                <RaisedButton label='30 Amp Alien Build' primary={true} style={style}
                  onClick={()=>this.props.selectPreset('30a_alien')}
                  ></RaisedButton>
              </Paper>
            </div>
            <ProductGrid 
              products={this.props.products} 
              onProductSelect={this.props.onProductSelect}
              onProductDeselect={this.props.onProductDeselect}
            ></ProductGrid>

            <AccessoriesGrid products={this.props.products} onProductSelect={this.props.onProductSelect}></AccessoriesGrid>
          </div>
          <div className='ShoppingListContainer' > 
            <ShoppingList products={this.props.products}  onProductDeselect={this.props.onProductDeselect}/>
          </div>

      
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    onProductSelect: (product) => {
      dispatch(productActions.productSelected(product))
    },
    onProductDeselect: (product) => {
      dispatch(productActions.productDeSelected(product))
    },
    selectPreset: (name)=>{
      dispatch(productActions.selectPreset(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
