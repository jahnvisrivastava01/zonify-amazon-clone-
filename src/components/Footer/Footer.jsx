import React from 'react'
import './Footer.css'
import amazonLogo from '../../assets/amazonLogo.png'

const Footer=()=> {
  return (
    <div className='footer'>
        <div className='footerContent'>

            <div className='footerCont1'>
                <div className='contentFooterTitle'>Get To Know Us</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>About US</div>
                    <div className='contentFooterSubTitleCont'>Careers</div>
                    <div className='contentFooterSubTitleCont'>Press Releases</div>
                    <div className='contentFooterSubTitleCont'>Zonify Science</div>
                </div>
            </div>


            <div className='footerCont1'>
                <div className='contentFooterTitle'>Connect with Us</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>Facebook</div>
                    <div className='contentFooterSubTitleCont'>Twitter</div>
                    <div className='contentFooterSubTitleCont'>Instagram</div>
                    
                </div>
            </div>



            <div className='footerCont1'>
                <div className='contentFooterTitle'>Make Money with Us</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>Sell on Zonify</div>
                    <div className='contentFooterSubTitleCont'>Protect and Build Your Brand</div>
                    <div className='contentFooterSubTitleCont'>Sell under Zonify Accelerator</div>
                    <div className='contentFooterSubTitleCont'>Supply to Zonify</div>
                    <div className='contentFooterSubTitleCont'>Become an Affiliate</div>
                    <div className='contentFooterSubTitleCont'>Fulfilment by Zonify</div>
                    <div className='contentFooterSubTitleCont'>Advertise Your Products</div>
                    <div className='contentFooterSubTitleCont'>Zonify Pay on Merchants</div>
                    <div className='contentFooterSubTitleCont'>Zonify Global Selling</div>
                    
                    
                </div>
            </div>

            <div className='footerCont1'>
                <div className='contentFooterTitle'>Let Us Help You</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>Your Account</div>
                    <div className='contentFooterSubTitleCont'>Returns Centre</div>
                    <div className='contentFooterSubTitleCont'>Recalls and Product Safety Alerts</div>
                    <div className='contentFooterSubTitleCont'>100% Purchase Protection</div>
                    <div className='contentFooterSubTitleCont'>Zonify App Download</div>
                    <div className='contentFooterSubTitleCont'>Help</div>

                    
                    
                </div>
            </div>

        </div>

        <div className='amazonImg'>
            <img className='amazonImgFooter' src={amazonLogo}/>
        </div>
    </div>
  )
}

export default Footer
