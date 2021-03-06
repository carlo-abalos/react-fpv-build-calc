import React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';

import './index.css';

class ProductTile extends React.Component{

    state = {
        open: false
    }

    handleOpen = ()=>{
        this.setState({open: true});
    }

    handleClose = ()=>{
        this.setState({open: false});
    }

    thisProductChecked = ()=>{
        return this.props.allProducts.findIndex((product)=>{
            return this.props.product.name === product.name
        })
    }

    render =()=>{
        return(
            <div className='ProductTile'>
                <Paper zDepth={1}>
                    <div>
                        <span className='ProductName'>
                            {this.props.product.name}
                        </span>
                    </div>
                    
                    <div className='ProductLinkList'>
                        <span className='ProductPrice'>
                            {this.props.product.price.toFixed(2)}
                        </span>
                        {
                            Object.keys(this.props.product.shop).map((key, i)=>{
                                let url = this.props.product.shop[key];
                                if(String(key) === 'banggood') url += '?p=H101138294533201701A';
                                return <a key={i} className='ProductLink' href={url} target='_blank'>{key}</a>
                            })
                        }
                    </div>

                        {/* <span className='ProductName'>{props.product.name}</span>
                        <span className='ProductPrice'>{props.product.price}</span> */}
                    
                    <div className='ProductImageContainer'>
                        <div className='ProductCheckContainer'>
                            <Checkbox checked={this.thisProductChecked() !== -1}  onClick={()=>{
                                const index = this.thisProductChecked();
                                if(index !== -1){
                                    return this.props.onProductDeselect(this.props.product)
                                }
                                this.props.onProductSelect(this.props.product)
                            }}></Checkbox>
                        </div>

                        <a onClick={this.handleOpen}>
                            <img className='ProductImage' 
                            src={this.props.product.image}
                            alt={this.props.product.name}/>
                        </a>

                        <Dialog
                            title={this.props.product.name}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <p>{this.props.product.notes}</p>

                            <img className='ProductImageLarge' 
                            src={this.props.product.image}
                            alt={this.props.product.name}/>
                        </Dialog>

                    </div>
                </Paper>
            </div>
        )
    }
}

export default ProductTile;