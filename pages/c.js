import React from 'react'
import styled from 'styled-components'
import page from '../hoc/page'

const Container = styled.div`
  padding: 100px;
`

class C extends React.Component {
  render() {
    return (
      <Container>
        <h1>C</h1>
        <div>
          Sin <code>getInitialProps</code> ni Redux, ni la navigación, ni nada.
        </div>
      </Container>
    )
  }
}

export default C
