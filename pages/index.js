import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import page from '../hoc/page'
import { setUser } from '../redux/modules/users'

// const Container = styled.div`
//   padding: 50px;
// `

class Index extends React.Component {
  static async getInitialProps(context) {
    const { store } = context
    store.dispatch(setUser('Bob'))
    return {
      unProp: 42
    }
  }

  render() {
    return (
      <div style={{ border: '3px solid green' }}>
        Welcome to Lemon! {this.props.unProp}
        <div>
          <Link href="/a">
            <a>A listo</a>
          </Link>
        </div>
        <div>
          <a href="/a">A tonto</a>
        </div>
      </div>
    )
  }
}

export default page(Index)
