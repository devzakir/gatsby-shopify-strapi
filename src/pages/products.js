import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const ProductsPage = ({ data }) => (
  <Layout>
    <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link to={`/products/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRangeV2.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>

          <button onClick={() => addToCart(node.handle)}>Add To Cart </button>
        </li>
      ))}
    </ul>
  </Layout>
)

export default ProductsPage

function addToCart (handle) {
  console.log(handle);
}

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`