import React, {  useEffect, useState } from 'react';
// import cartFile from '../../data/cart.json';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';
import styles from '../../css/Homepage.module.css';
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';
import SortButtons from '../../components/home/SortButtons';
import Product from '../../components/home/Product';
import Pagination from 'react-bootstrap/Pagination';

function HomePage() {
  const [products, setProducts] = useState([]); //3
  const [catProducts, setCatProducts] = useState([]); //5
  const [dbProducts, setDbProducts] = useState([]); //20

  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [pageNumbers, setPageNumbers] = useState([])
  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
    .then(res => res.json())
    .then(data => setCategories(data || []))

    fetch(process.env.REACT_APP_PRODUCTS_URL)
    .then(res => res.json())
    .then(data => {
      setProducts(data.slice(0,3) || []);
      setCatProducts(data || []);
      setDbProducts(data || []);
      setLoading(false);
      // const totalPages = Math.ceil(data.length / 3);
      // const pageArray = Array.from({ length: totalPages }, (_, index) => index + 1);
      const totalPages = Math.ceil(data.length / 3);
      const pagesArray = [];
      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }
    setPageNumbers(pagesArray);
    })
  }, []);

 
  const filterByCategory = (category) => {
    const result = dbProducts.filter(product => product.category === category);
    setCatProducts(result);
    setProducts(result.slice(0,3))

    const totalPages = Math.ceil(result.length / 3);
      const pagesArray = [];
      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }
    setPageNumbers(pagesArray);
    setActivePage(1)
  };

  const changePage = (newPage) => {
    setActivePage(newPage)
    setProducts(catProducts.slice(newPage*3 - 3, newPage*3))
  }

  if (isLoading) {
    return <div><Spinner/> Loading...</div>
  }

  return (
    <div className='textAligin'>

      <CarouselGallery/>
      <div>
      <div>Total: {dbProducts.length} tk</div>
      <div>In category{catProducts.length} tk</div>

        {categories.map (category => 
        <Button key={category.name} 
          variant='contained' 
          onClick={() => filterByCategory(category.name)}>
          {category.name}
        </Button>)}
            
        <br /><br />
        <SortButtons
        products={products}
        setProducts={setProducts}
        />
        <br /><br />  
      </div>

      <Pagination>
     {pageNumbers.map(pageNumber => 
     <Pagination.Item key={pageNumber} onClick={() => changePage(pageNumber)} 
     active={pageNumber === activePage}>
      {pageNumber}
    </Pagination.Item>)}
      </Pagination>
      <div className={styles.products}>
      {products.map((product, index) => 
        <Product
        key={product.id}
        product={product}
        />
      )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default HomePage;

