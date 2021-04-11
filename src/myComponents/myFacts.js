import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {  } from 'react-bootstrap';
//------- DEFAULT IMPORT END -------

import { get } from "lodash";


const MyFacts = ({ data }) => {
  var fact_arr = []
  for (let i = 0; i < 5; i++){
    fact_arr.push(
        <p> facty {i}</p>
    )
  }
  console.log(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
  const nodes = get(data, "allGoogleSheetSheet1Row.edges", [])

  
  nodes.map(node =>
    // console.log({...node})
    console.log(node.node.facts)
  )



  return (
    <>
      {fact_arr}
      <div>{nodes.map(node => <p key={node.node.facts}> {node.node.facts}</p>)}</div>
    </>
  )
}

// GraphQL query to our spreadsheet
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

export default MyFacts
