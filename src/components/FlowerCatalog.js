// components/FlowerCatalog.js
const FlowerCatalog = ({ flowers, onSelect }) => {
    return (
      <div>
        <h3>Select Flower Arrangement</h3>
        <select onChange={(e) => onSelect(e.target.value)}>
          {flowers.map((flower) => (
            <option key={flower.code} value={flower.code}>
              {flower.name} - {flower.size} - Rp. {flower.price}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FlowerCatalog;
  