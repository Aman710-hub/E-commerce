import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading,
    single_product_error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();

  // we fetch data inside this component not in context bs we need to dynamicly fetch data
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // every time "id" changes we fetch data. But when id changes ? - id changes when we click on some product
  }, [id]);

  // AUTO NAVIGATION TO HOME PAGE IN CASE EROR
  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // if error is "true" this useEffect will be triggered
  }, [single_product_error]);

  // LOADING
  if (single_product_loading) {
    return <Loading />;
  }

  // ERROR
  if (single_product_error) {
    return <Error />;
  }

  // THE MAIN RETURN
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = single_product;
  return (
    <Wrapper>
      <PageHero title={name} product={single_product} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages imgs={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available :</span> {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span> {sku}
            </p>
            <p className="info">
              <span>Brand :</span> {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart single_product={single_product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
