import React from 'react'
import styled from 'styled-components'
import page from '../hoc/page'

const Container = styled.div`
  padding: 100px;
`

class A extends React.Component {
  render() {
    return (
      <Container>
        <h1>A</h1>
      </Container>
    )
  }
}

export default page(A)
