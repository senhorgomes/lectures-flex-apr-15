import "../App.css";
import { useState, useEffect } from "react";
import { StockCard } from "./StockCard";

function Products() {

    const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((dataObject) => setInventory(dataObject.data))
  }, [])

    return (
        <main>
            <section>
                <h2>Stock Items</h2>
                <div className="row">
                    {
                        inventory.map((item, index) =>
                            <StockCard
                                id={item.id}
                                index={index}
                                name={item.name}
                                image={item.image}
                                count={item.count}
                                user_id={item.user_id}
                            />
                        )
                    }
                </div>
            </section>
        </main>
    );
}

export default Products;