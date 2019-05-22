import React,{PureComponent} from 'react';
import {DownloadAppSection} from '../style';


class DownloadApp extends PureComponent{
    render(){
        return(
                <DownloadAppSection>
                    <img src='https://i0.wp.com/www.ucreative.com/wp-content/uploads/2015/04/design-barcode-product-main-2.jpg' alt='' className='barcodeImg'></img>
                    <p className='discption'>Download M App</p>
                    <p className='discption'>Writing any time</p>
                </DownloadAppSection>
        )
    }
}
export default DownloadApp;