
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProductFilter = ({ sortBy, handleSortByChange, toggleSidebar }) => {
  return (
    <div className='filter-section'>
      <div className='hide-content'>
        <h4>3685 ITEMS</h4>    
        <div className='hide'>
          <MdKeyboardArrowLeft className='icon-hide'/>
          <button onClick={toggleSidebar}><p>HIDE FILTER</p></button>
        </div>
      </div>
      <select className='filtering-list' value={sortBy} onChange={handleSortByChange}>
        <option value="">RECOMMENDED</option>
        <option value="newest">Newest First</option>
        <option value="popular">Popular</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;