import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Jumbotron, Button } from 'react-bootstrap';
//------- DEFAULT IMPORT END -------


const MyJumbo = () => (
  <>
    <Jumbotron>
      <h1>10 facts about wall street bets!</h1>
      <p>
        The latest and greatest facts about WSB here updated daily!
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </>
)

export default MyJumbo
