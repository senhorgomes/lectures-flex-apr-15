import { useNavigate } from "react-router-dom";

export const StockCard = (props) => {

  const navigate = useNavigate();

  const increaseStock = () => {
    props.setInventory(prev => {
      // access the previous state
      const inventoryCopy = [...prev];
      // Creating a clone of the item we wish to modify
      const singleItemClone = {...inventoryCopy[props.index]}
      singleItemClone.count ++;
      inventoryCopy[props.index] = singleItemClone
      return inventoryCopy;
    })
  } 
  const decreaseStock = () => {
    props.setInventory(prev => {
      // access the previous state
      const inventoryCopy = [...prev];
      // Creating a clone of the item we wish to modify
      const singleItemClone = {...inventoryCopy[props.index]}
      singleItemClone.count --;
      inventoryCopy[props.index] = singleItemClone
      return inventoryCopy;
    })
  } 


  return (
    <article className="card flow" onClick={()=> navigate(`/products/${props.id}`)}>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.id} height="160px" />
      <div>
        <p>Current Stock: {props.count}</p>
        <div className="row row-item-grow">
          {/* <button onClick={() => increaseStock()}>↑ Add {props.pluralItem}</button> */}
          {/* <button onClick={() => decreaseStock() }>↓ Remove {props.pluralItem}</button> */}
        </div>
      </div>
    </article>
  );
};
