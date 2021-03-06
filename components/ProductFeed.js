import react from "react";
import Products from "./Products";

const ProductFeed = ({ products }) => {
  //   console.log(products);
  return (
    <>

    <div>
      <div
        className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
      md:-mt-52 mx-auto"
      >
        {products
.slice(0,4)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Products
              id = {id}
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating.rate}
            />
          ))}
        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        />

        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, rating }) => (
                <Products
                  key={id}
                  id = {id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating.rate}
                />
              )
            )}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Products
              key={id}
              id = {id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating.rate}
            />
          ))}
      </div>
      </div>
    </>
  );
};

export default ProductFeed;
