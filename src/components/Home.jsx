import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FcCustomerSupport } from "react-icons/fc";
import { FcAddColumn } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcAddImage } from "react-icons/fc";
import axios from "axios";
import Products from "./Products";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <div className='w-full '>
      <div className='w-4/5 mx-auto flex justify-center flex-col'>
        <Products products={products} loading={loading} skeletonLength={10} />
        <div className=' p-4 flex  items-center flex-col lg:flex-row flex-wrap'>
          <ServiceCard
            title='Good Customer Support'
            body=' At tiidelab we provide our clients with good customer support to
          enhance adequate productivity'
            Icon={FcCustomerSupport}
            bgColor='bg-blue'
          />
          <ServiceCard
            title='Good Customer Support'
            body=' At tiidelab we provide our clients with good customer support to
          enhance adequate productivity'
            Icon={FcAddColumn}
            bgColor='bg-green'
          />
          <ServiceCard
            title='Good Customer Support'
            body=' At tiidelab we provide our clients with good customer support to
          enhance adequate productivity'
            Icon={FcAddImage}
            bgColor='bg-red'
          />
          <ServiceCard
            title='Good Customer Support'
            body=' At tiidelab we provide our clients with good customer support to
          enhance adequate productivity'
            Icon={FcAddressBook}
            bgColor='bg-purple'
          />
          <ServiceCard
            title='Good Customer Support'
            body=' At tiidelab we provide our clients with good customer support to
          enhance adequate productivity'
            Icon={FcApproval}
            bgColor='bg-yellow'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
