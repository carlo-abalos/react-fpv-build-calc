import React from 'react';
import ProductTile from '../ProductTile';
import Frames from '../products/frames';
import FCs from '../products/fcs';
import Motors from '../products/motors';
import Esc from '../products/esc';
import Cams from '../products/camera';
import Vtx from '../products/vtx';

import FontIcon from 'material-ui/FontIcon';
import ReactTooltip from 'react-tooltip';
import productRenderer from '../lib/product-renderer';

import './index.css';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const ToolTips = () => {
    return(
        <div>
            <ReactTooltip id='FramesInfoTooltip' type='dark' effect='solid'>
                Your frame is the basis on which everything else is built. All 
                of the frames listed here are between 210 and 250 mm is size.
            </ReactTooltip>
            <ReactTooltip id='FlightControllerTooltip' type='dark' effect='solid'>
                The flight controller coordinates communication between the various
                components on the quad copter.
            </ReactTooltip>
            <ReactTooltip id='MotorsTooltip' type='dark' effect='solid'>
                Motors...
            </ReactTooltip>
        </div>
    )
}

const ProductGrid = (props)=>{

    const iconStyles = {color: '#999', fontSize: '0.7em'};

    return(
        <div className='ProductGrid'>

            <div className='ProductGridColumn'>
                <h2 >Frames
                    <FontIcon data-tip data-for='FramesInfoTooltip' className='material-icons' style={iconStyles}>help</FontIcon>
                </h2>

                {productRenderer(Frames, props)}
            </div>

            <div className='ProductGridColumn'>
                <h2 >Flight Controllers
                    <FontIcon data-tip data-for='FlightControllerTooltip' className='material-icons' style={iconStyles}>help</FontIcon>
                </h2>

                {productRenderer(FCs, props)}
            </div>

            <div className='ProductGridColumn'>
                <h2>Motors
                <FontIcon data-tip data-for='MotorsTooltip' className='material-icons' style={iconStyles}>help</FontIcon>
                </h2>
                {productRenderer(Motors, props)}
            </div>

            <div className='ProductGridColumn'>
                <h2>Speed Controllers</h2>
                {productRenderer(Esc, props)}
            </div>

            <div className='ProductGridColumn'>
                <h2>Video Transmitter</h2>
                {productRenderer(Cams, props)}  
            </div>  

            <div className='ProductGridColumn'>
                <h2>Video Transmitter</h2>
                {productRenderer(Vtx, props)}
            </div>

            <ToolTips></ToolTips>

            {/* <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Frame</TableHeaderColumn>
                        <TableHeaderColumn >Flight Controller</TableHeaderColumn>
                        <TableHeaderColumn >Motors</TableHeaderColumn>
                        <TableHeaderColumn >Speed Controllers</TableHeaderColumn>
                        <TableHeaderColumn >Props</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>
                            <ProductTile product={Frames.MartianII220}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={FCs.SpRacingF3}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Motors.CrazeponyEmax2300}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Esc.Makerfire20a}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Props.DalCyclone}/>
                        </TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>
                            <ProductTile product={Frames.Realaccx210Pro}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={FCs.SpRacingF3}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Motors.Emax2205s2600kv}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Esc.Makerfire20a}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Props.DalCyclone}/>
                        </TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>
                            <ProductTile product={Frames.LumenierCharpu}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={FCs.Naze32Rev6}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Motors.LumenierSkitzo}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Esc.Makerfire20a}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ProductTile product={Props.HqVs1}/>
                        </TableRowColumn>
                    </TableRow>
                </TableBody>

            </Table> */}

        </div>
    )
}

export default ProductGrid;