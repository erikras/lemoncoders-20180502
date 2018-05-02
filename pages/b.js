import React from 'react'
import styled from 'styled-components'
import page from '../hoc/page'
import { getUsers, loadUsers } from '../redux/modules/users'

const Container = styled.div`
  padding: 100px;
`

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class B extends React.Component {
  static async getInitialProps(context) {
    console.info('me duermo')
    await sleep(2000)
    console.info('buenos dias')
    return {
      name: 'Lemon'
    }
  }

  render() {
    return (
      <Container>
        <h1>B</h1>
        <div>{this.props.name}</div>
      </Container>
    )
  }
}

export default page(B)
