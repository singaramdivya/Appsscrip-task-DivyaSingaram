
import React, { useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';

import axios from 'axios';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [idealFor, setIdealFor] = useState('');
  const [category, setCategory] = useState({ men: false, women: false, jewelery: false, electronics: false });
  const [sortBy, setSortBy] = useState('newest');
  const [sidebarVisible, setSidebarVisible] = useState(true); 

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [idealFor, category, sortBy]);

  const filterProducts = () => {
    let filtered = [...products];

    if (idealFor) {
      filtered = filtered.filter(product => product.idealFor === idealFor);
    }

    if (category.men || category.women || category.jewelery || category.electronics) {
      filtered = filtered.filter(product => {
        if (category.men && product.category.toLowerCase() === "men's clothing") {
          return true;
        }
        if (category.women && product.category.toLowerCase() === "women's clothing") {
          return true;
        }
        if (category.jewelery && product.category.toLowerCase() === 'jewelery') {
          return true;
        }
        if (category.electronics && product.category.toLowerCase() === 'electronics') {
          return true;
        }
        return false;
      });
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'highest':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleIdealForChange = event => {
    setIdealFor(event.target.value);
  };

  const handleCategoryChange = event => {
    const { name, checked } = event.target;
    setCategory(prevState => ({ ...prevState, [name]: checked }));
  };

  const handleSortByChange = event => {
    setSortBy(event.target.value);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="main-container">
      <div>
        <Title />
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <hr className="line" />

        <div className="heading">
          <h1>Discover our products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            <br />
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <hr className="line line1" />
        <ProductFilter
          idealFor={idealFor}
          handleIdealForChange={handleIdealForChange}
          category={category}
          handleCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
          toggleSidebar={toggleSidebar} 
        />
        <hr className="line" />
        <div className="container">
          {sidebarVisible && ( 
            <Sidebar
              idealFor={idealFor}
              handleIdealForChange={handleIdealForChange}
              category={category}
              handleCategoryChange={handleCategoryChange}
              sortBy={sortBy}
              handleSortByChange={handleSortByChange}
            />
          )}
          <ProductList products={filteredProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
