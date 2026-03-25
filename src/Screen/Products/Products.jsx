import React, { useEffect, useState } from 'react'
import './Products.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import productDetail from './Products.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [searchParams] = useSearchParams()
  const items = searchParams.get("item")||null
  const category = searchParams.get("category") || null
  const [filteredData , setfilteredData] = useState(productDetail?.products)

  const handleAddToCart=(item) => {
    toast.success("Added to Cart",{
      position:"bottom-right"
    })
    dispatch(addToCart(item));

  }

  useEffect(() => {
    console.log({items})
    if (!productDetail?.products) return;

    if (!items && !category) {
      setfilteredData(productDetail.products);
      return;
    }

    const data = productDetail.products.filter((product) => {
      const matchesItem = items
        ? product.name.toLowerCase().includes(items.toLowerCase())
        : true;

      const matchesCategory = category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true;

      return matchesItem && matchesCategory;
    });

    console.log("Filtered →", data);
    setfilteredData(data);
  }, [searchParams, productDetail]);

console.log({filteredData})
  return (
    <div className='productPage'>
      <div className='productTopBanner'>
        <div className='productTopBannerItems'>
          Electronics
        </div>
        <div className='productTopBannerItemsSubMenu'>Mobiles & Accesories</div>
        <div className='productTopBannerItemsSubMenu'>Laptops & Accesories</div>
        <div className='productTopBannerItemsSubMenu'>TV & Home Entertainment</div>
        <div className='productTopBannerItemsSubMenu'>Audio</div>
        <div className='productTopBannerItemsSubMenu'>Cameras</div>
        <div className='productTopBannerItemsSubMenu'>Computer Peripherals</div>
        <div className='productTopBannerItemsSubMenu'>Smart Technology</div>
        <div className='productTopBannerItemsSubMenu'>Musical Instruments</div>
        <div className='productTopBannerItemsSubMenu'>Office & Stationery</div>

      </div>

      <div className='productsPageMain'>
        <div className='productsPageMainLeftCategory'>
          <div className='productsPageMainLeftCategoryTitle'>
            Category
          </div>

          <div className='productsPageMainLeftCategoryContent'>
            <div className='productsPageMainLeftCategoryTitleContent'>Computers & Accesories</div>
            <div className='productsPageMainLeftCategoryContentSub'>Macbooks</div>
            <div className='productsPageMainLeftCategoryContentSub'>Zonify Prime</div>
            <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>


            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />


              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'>& Up</div>



            </div>

            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />


              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'>& Up</div>


            </div>


            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />


              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'>& Up</div>


            </div>


            <div className='ratingLeftBox'>
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />


              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className='andUp'>& Up</div>


            </div>

            <div className='productPageMainLeftCategoryContentSub'>Delivery Day
              <label className='label'>
                <input type="checkbox" />
                Get it by Tomorrow


              </label>


            </div>
            <div className='productPageMainLeftCategoryContentSub'>Item Condition
              <label className='label'>
                <input type="checkbox" />
                New


              </label>

              <label className='label'>
                <input type="checkbox" />
                Renewed


              </label>




            </div>

            <div className='productPageMainLeftCategoryContentSub'>Price


              <ListItem>
                <ListItemText
                  primary="under 1000"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="1000-5000"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="5000-10,000"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="10,000-20,0000"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="over 20,000"
                />
              </ListItem>

            </div>

            <div className='productPageMainLeftCategoryContentSub'>Made for Zonify Brands
              <label className='label'>
                <input type="checkbox" />
                Made for Zonify


              </label>


            </div>
          </div>
        </div>

        <div className='productsPageMainRight'>
          {category && <div className='productsPageMainRightTopBanner'>
          { filteredData?.length>1 && <span>{1}-{filteredData?.length} of </span> } {filteredData?.length} result{filteredData?.length>1 ? "s":""} for <span className='productsPageMainRightTopBannerSpan'>{category}</span>
          </div>}

          <div className='itemsImageProductPage'>

            {
             filteredData?.length>0? filteredData.map((item, index )=> {
                return (
                <div className='itemsImageProductPageOne'  key={item.id}>
                  <div className='imgBlockitemsImageProductpageOne'>
                    <img src={item.imageUrl} className='productImageProduct' />
                  </div>


                  <div className='productNameProduct'>
                    <div>{item.name}</div>
                    <div className='productNameProductRating'>

                      <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                    </div>

                    <div className='priceProductDetailPage'>
                      <div className='currencyText'>₹</div>
                      <div className='rateHomeDetail'>
                        <div className='rateHomeDetailPrice'>{item.price}</div>
                        <div className='addtobasketBtn' onClick={() => {handleAddToCart(item)}}>Add To Cart</div>
                      </div>
                    </div>

                    <div className='offProductPage'>Upto 15% off on selected cards</div>
                    <div className='freeDelivery'>Free Delivery</div>
                  </div>
                </div>);
              }):(<div>
               No Such Products found, please try searching something else
              </div>)
            }



          </div>
        </div>
      </div>
      <ToastContainer/>




    </div>
  )
}

export default Products