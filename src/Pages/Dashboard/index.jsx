import React, { useState } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import { FaPlus } from "react-icons/fa6";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { FaAngleUp } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Progress from '../../Components/ProgressBar';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Dashboard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  }
  return (
    <div>
      <div className='w-full py-2 px-5 bg-[#f1faff] border border-[rgba(0,0,0,0.1)] flex items-center justify-between gap-8 mb-5 rounded-md'>
        <div className='info'>
          <h1 className='text-[35px] font-bold leading-10 mb-3'>Good Morning,<br /> Cameron</h1>
          <p>Here’s What happening on your store today. See the statistics at once.</p>
          <br />
          <Button className="btn-blue !capitalize"><FaPlus />Add Product</Button>
        </div>
        <img src="\img\shop-illustration.webp" alt="shop-illustration" className='w-[250px]' />
      </div>

      <DashboardBoxes />

      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
          <h2 className='text-[18px] font-[600]'>Products</h2>
        </div>
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3" width="10%">
                <div className='w-[60px]'>
                   <Checkbox {...label} size='small'/>
                </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  CATEGORY
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  SUB CATEGORY
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  PRICE
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  SALES
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
         <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <td className="px-6 py-2">
            <div className='w-[60px]'>
                   <Checkbox {...label} size='small'/>
                </div>
          </td>

              <td className="px-6 py-2">
            <div className='flex items-center gap-4 w-[350px]'>
              <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
            <Link to="/product/45745">
                 <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all'/>
</Link>
              </div>
              <div className='info w-[75%]'>
                  <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                  <span className='text-[12px]'>Flying Machine</span>
              </div>
            </div>
          </td>
           <td className="px-6 py-2">
            Electronics
           </td>
           <td className="px-6 py-2">
            Women
           </td>
           <td className="px-6 py-2">
            <div className='flex items-center gap-1 flex-col'>
              <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                $58.00
              </span>
              <span className='Price  text-primary text-[14px] font-[600]'>
                $58.00
              </span>
            </div>
           </td>
           <td className="px-6 py-2">
            <p className='text-[14px] w-[150px]'><span className='font-[600]'>234</span>sale</p>
            <Progress/>
           </td>
           <td className="px-6 py-2"></td>
           <td className="px-6 py-2"></td>
         </tr>



            </tbody>
          </table>
        </div>
      </div>

      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
          <h2 className='text-[18px] font-[600]'>Recent Orders</h2>
        </div>
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Paymant Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  PinCode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={() => isShowOrderProduct(0)}>
                    {

                      isOpenOrderProduct == 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary font-[600]'>dsf4556d5dsdfsdcds</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary font-[600]'>Pay_DFsdsDSdsd789</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  RINKU VERMA
                </td>
                <td className="px-6 py-4 font-[500]">
                  7458236485
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='block w-[400px]'>B 45 street 6 Adresh nagar Delhi </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  36589
                </td>
                <td className="px-6 py-4 font-[500]">
                  8500
                </td>
                <td className="px-6 py-4 font-[500]">
                  rinkuv.planetc@gmail.com
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary font-[600]'>
                    4564645jkjjijojio
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <Badge status="delivered" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2024-120-04
                </td>
              </tr>
              {isOpenOrderProduct === 0 && (
                <tr>
                  <td className='pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
                          <tr>

                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-600'>Men Opaque Casual Shirt...</span>
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>


                          </tr>

                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-600'>Men Opaque Casual Shirt...</span>
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>


                          </tr>
                          <tr>
                            <td className='bg-[#f1f1f1]' colSpan="12">

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={() => isShowOrderProduct(1)}>
                    {

                      isOpenOrderProduct == 1 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary font-[600]'>dsf4556d5dsdfsdcds</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary font-[600]'>Pay_DFsdsDSdsd789</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  RINKU VERMA
                </td>
                <td className="px-6 py-4 font-[500]">
                  7458236485
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='block w-[400px]'>B 45 street 6 Adresh nagar Delhi </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  36589
                </td>
                <td className="px-6 py-4 font-[500]">
                  8500
                </td>
                <td className="px-6 py-4 font-[500]">
                  rinkuv.planetc@gmail.com
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary font-[600]'>
                    4564645jkjjijojio
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <Badge status="delivered" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2024-120-04
                </td>
              </tr>
              {isOpenOrderProduct === 1 && (
                <tr>
                  <td className='pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
                          <tr>

                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-600'>Men Opaque Casual Shirt...</span>
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>


                          </tr>

                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-600'>Men Opaque Casual Shirt...</span>
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span>1300</span>
                            </td>


                          </tr>
                          <tr>
                            <td className='bg-[#f1f1f1]' colSpan="12">

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
