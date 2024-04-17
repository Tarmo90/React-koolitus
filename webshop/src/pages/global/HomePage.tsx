import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify'; 
import { Button } from '@mui/material'; 
import styles from '../../css/Homepage.module.css'; 
import { Spinner } from 'react-bootstrap'; 
import CarouselGallery from '../../components/home/CarouselGallery'; 
import SortButtons from '../../components/home/SortButtons'; 
import ProductComponent from '../../components/home/Product'; 
import Pagination from 'react-bootstrap/Pagination'; 
import useFetchProducts from '../../util/UseFetchProducts';
import { Product, } from '../../models/Product';

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [catProducts, setCatProducts] = useState<Product[]>([]); 
  
  const [categories, setCategories] = useState<any[]>([]); 
  
  const [pageNumbers, setPageNumbers] = useState<number[]>([]); 
  const [activePage, setActivePage] = useState<number>(1); 
  const {dbProducts, isLoading} = useFetchProducts()

  
  useEffect(() => {
    const url = process.env.REACT_APP_CATEGORIES_URL
    if (url === undefined) {
      return
    }
    fetch(url)
   
      .then(res => res.json())
      .then(data => setCategories(data || []));

        setCatProducts(dbProducts || []);
        setProducts(dbProducts.slice(0,3)|| []); 
        const totalPages = Math.ceil(dbProducts.length / 3); // Kogu lehekülgede arv
        const pagesArray = [];
        for (let i = 1; i <= totalPages; i++) {
          pagesArray.push(i);
        }
        setPageNumbers(pagesArray); // Lehtede arvu määramine
    //   });
  }, [dbProducts]);


  const filterByCategory = (category: string) => {
    const result = dbProducts.filter(product => product.category === category); 
    setCatProducts(result); 
    setProducts(result.slice(0, 3)); 
    const totalPages = Math.ceil(result.length / 3); 
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPageNumbers(pagesArray); // Lehtede arvu määramine
    setActivePage(1); // Aktiivne leht
  };

  // Funktsioon lehe vahetamiseks paginatsiooni abil
  const changePage = (newPage: number) => {
    setActivePage(newPage); // Määra aktiivne leht
    setProducts(catProducts.slice(newPage * 3 - 3, newPage * 3)); // Määra lehekülje järgi filtreeritud tooted
  }

  if (isLoading) {
    return <div><Spinner/> Loading...</div>; 
  }

  return (
    <div className='textAligin'>

      <CarouselGallery/> 
      <div>
        <div>Total: {dbProducts.length} tk</div> 
        <div>In category{catProducts.length} tk</div> 
        
        {categories.map(category => 
          <Button 
            key={category.name} 
            variant='contained' 
            onClick={() => filterByCategory(category.name)}
          >
            {category.name}
          </Button>
        )}
        <br /><br />
        <SortButtons 
          products={products}
          setProducts={setProducts}
        />
        <br /><br />  
      </div>

      <Pagination>
        {pageNumbers.map(pageNumber => 
          <Pagination.Item 
            key={pageNumber} 
            onClick={() => changePage(pageNumber)} 
            active={pageNumber === activePage}
          >
            {pageNumber}
          </Pagination.Item>
        )}
      </Pagination>

      <div className={styles.products}>
        {products.map((product, index) => 
          <ProductComponent
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
