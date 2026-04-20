import React, { useEffect, useState } from "react";
import Container from "./Common/Container";
import Section from "./Common/Section";
import Button from "./Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/counter/cartSlice";
const Product = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Section className="py-25">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center pb-10 font-bold">Product</h1>

          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-xl shadow hover:shadow-xl hover:-translate-y-1.5 transition bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] object-contain mb-3"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold mb-2 line-clamp-2">
                      {item.title.slice(0, 20)}...
                    </p>

                    <p className="text-green-600 font-bold">${item.price}</p>
                    <div className="flex">
                      <Button
                      onClick={() => dispatch(addToCart(item))}
                    
                        className="mt-3 w-full"
                      >
                        add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        <Button Tagname="a" href="/products" className="mt-20 !bg-black !text-white uppercase !py-5">
          See all products
        </Button>
        </div>

      </Container>
    </Section>
  );
};

export default Product;
