import React from 'react'
import './homeBanner.css'
import homeProductItem from '../../../HomeProduct.json'

const HomeBanner = () => {
    console.log(homeProductItem?.product)
    return (
        <div className='homeBanner'>
            <img className='homeBannerImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jupiterminievent/Ends_today_PC_NTA_3000x1200._CB797278030_.jpg" />
            <div className='grayBackgroundHomeBanner'></div>

            {/* THIS IS THE CONTAINER THAT WILL USE FLEXBOX TO HOLD CARDS SIDE-BY-SIDE */}
            <div className='homeBannerItemDiv'>

                {/* 1. FIRST CARD (Left) */}
                {
                    homeProductItem?.product?.length > 0 ? homeProductItem?.product?.map((item,index) => (
                        <div className='homeBannerItemDivCard'>
                            <div className='homeBannerItemDivCardTitle'>{item?.
                                itemTitle
                            }</div>
                            <div className='imgHomeBannerItemDivCard'>
                                {/* Empty div for any banner image above the 4-item grid */}
                            </div>

                            {/* 4-Item Grid Content */}
                            <div className='itemCards'>
                              { item?.imgs?.map((data)=><div className='imgBannerHomeDiv'>
                                    <img className='imgBannerHomeDivImg' src={data?.img} />
                                    <div className='imgBannerImgName'>{data?.imgTitle}</div>
                                </div>) }

                            </div>

                            <div className='seeMoreHomeBanner'>See More</div>
                        </div>

                    )) : (
                        <div>
                            No Item Prese
                        </div>
                    )
                }





            </div>
        </div>
    )
}

export default HomeBanner