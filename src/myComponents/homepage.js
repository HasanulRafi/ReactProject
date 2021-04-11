
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from 'react-bootstrap';
//------- DEFAULT IMPORT END -------

import MyNav from './myNav'
import MyJumbo from './myJumbo'
import MyFacts from './myFacts'

const Homepage = () => {
  return (
    <>
      <MyNav/>
      <MyJumbo/>
      <MyFacts/>
    </>
  )
}

export default Homepage
