import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Homepage from "../myComponents/homepage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { get } from "lodash";

const IndexPage = ({data}) => {
  // const nodes = get(data, "allGoogleSheetSheet1Row.edges", [])
  //
  // nodes.map(node =>
  //   // console.log({...node})
  //   console.log("boom", node.node.FACTS)
  // )

  const nodes = get(data, "allGoogleSheetSheet1Row.edges", [])

  nodes.map(node =>
    // console.log({...node})
    console.log(node.node.facts)
  )
  var fact_arr = []

  for (let i = 0; i < 5; i++){
    fact_arr.push(
        <p> facty {i}</p>
    )
  }
  return(
    <>
      <Homepage/>
        <div>{nodes.map(node => <p key={node.node.facts}> {node.node.facts}</p>)}</div>
    </>
  )
}


export const query = graphql`
query {
  allGoogleSheetSheet1Row {
   edges {
     node {
       facts
     }
   }
 }
}
`;
export default IndexPage
