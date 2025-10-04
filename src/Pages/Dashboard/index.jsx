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
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import { GoTrash } from "react-icons/go";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const columns = [

  { id: 'product', label: 'PRODUCT', minWidth: 150 },
  { id: 'category', label: 'CATEGORY', minWidth: 100 },
  {
    id: 'subcategory',
    label: 'SUB CATEGORY',
    minWidth: 150,
  },
  {
    id: 'price',
    label: 'PRICE',
    minWidth: 130,
  },
  {
    id: "sales",
    label: 'SALES',
    minWidth: 100,
  },
  {
    id: "action",
    label: 'ACTION',
    minWidth: 120,
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

const Dashboard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [categoryFilterVal, setcategoryFilterVal] = React.useState(0);
  //  const [age, setAge] = React.useState('');

  const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
          <h2 className='text-[18px] font-[600]'>Products <span className='font-[400] text-[14px]'>(Tailwind Css Table)</span></h2>

        </div>
        <div className='flex items-center w-full pl-5 justify-between pr-5'>
          <div className='col w-[20%]'>
            <h4 className='font-[600] text-[13px] mb-2'>Category By</h4>
           <Select
           className='w-full'
           size="small"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={categoryFilterVal}
          onChange={handleChangeCatFilter}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Men</MenuItem>
          <MenuItem value={20}>Women</MenuItem>
          <MenuItem value={30}>kids</MenuItem>
        </Select>
          </div>

          <div className='col w-[25%] ml-auto flex items-center gap-3'>
<Button className='btn !bg-green-600 !text-white btn-sm'>Export</Button>
<Button className='btn-blue !bg-green-600 !text-white btn-sm'>Add Product</Button>
          </div>
        </div>

        <div className="relative overflow-x-auto pt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 pr-0 py-3" width="10%">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </th>
                <th scope="col" className="px-0 py-3 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
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
                <td className="px-6 pr-0 py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
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
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>

                </td>
                <td className="px-6 py-2"></td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
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
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>

                </td>
                <td className="px-6 py-2"></td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
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
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>

                </td>
                <td className="px-6 py-2"></td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
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
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>

                </td>
                <td className="px-6 py-2"></td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
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
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>

                </td>
                <td className="px-6 py-2"></td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
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
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>

                </td>
                <td className="px-6 py-2"></td>
              </tr>



            </tbody>
          </table>
        </div>

        <div className='flex items-center justify-end pt-5 pb-5 px-4'>
          <Pagination count={10} color="primary" />
        </div>

      </div>

      {/* paste */}
      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
          <h2 className='text-[18px] font-[600]'>Products <span className='font-[400] text-[14px]'>(Material Ui Table)</span></h2>
        </div>

          <div className='flex items-center w-full pl-5 justify-between pr-5'>
          <div className='col w-[20%]'>
            <h4 className='font-[600] text-[13px] mb-2'>Category By</h4>
           <Select
           className='w-full'
           size="small"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={categoryFilterVal}
          onChange={handleChangeCatFilter}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Men</MenuItem>
          <MenuItem value={20}>Women</MenuItem>
          <MenuItem value={30}>kids</MenuItem>
        </Select>
          </div>

          <div className='col w-[25%] ml-auto flex items-center gap-3'>
<Button className='btn !bg-green-600 !text-white btn-sm'>Export</Button>
<Button className='btn-blue !bg-green-600 !text-white btn-sm'>Add Product</Button>
          </div>
        </div>
        <br/>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size='small' />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }} className='!px-0'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to="/product/45745">
                        <img src="\img\Product.jpg" alt="product" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'><Link to="/product/45745">Women Wide Leg High-Rise Light Fade Stretchable Je...</Link></h3>

                      <span className='text-[12px]'>Flying Machine</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Electronics</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>Women</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className=' flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      $58.00
                    </span>
                    <span className='Price  text-primary text-[14px] font-[600]'>
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p>
                  <Progress value={40} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button>  </Tooltip>
                    <Tooltip title="View Product  Details" placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineRemoveRedEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                    <Tooltip title="Remove Product " placement="top">
                      <Button className='!w-[35px] !h-[35px]  bg-[#f1f1f1] !min-w-[35px] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' /> </Button></Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          // count={rows.length}
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        {/* <div className='flex items-center justify-end pt-5 pb-5 px-4'>
          <Pagination count={10} color="primary" />
        </div> */}
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
