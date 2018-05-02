import React from 'react'
import { Provider } from 'react-redux'
import initStore from '../redux/initStore'
import initClient from '../client'
import Link from 'next/link'
import styled from 'styled-components'

const page = WrappedComponent =>
  class Page extends React.Component {
    static async getInitialProps(context) {
      const cookie = context.req && context.req.headers.cookie
      const client = initClient(cookie)
      const store = initStore(undefined, client)

      const wrappedInitialProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps({ ...context, store })
        : {}
      return {
        ...wrappedInitialProps,
        initialState: store.getState(),
        cookie
      }
    }

    constructor(props) {
      super(props)
      const client = initClient(process.browser ? undefined : props.cookie)
      this.store = initStore(props.initialState, client)
    }

    render() {
      const { initialState, cookie, ...rest } = this.props
      return (
        <Provider store={this.store}>
          <div>
            <Header>
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
              <Link href="/a">
                <NavLink>A</NavLink>
              </Link>
              <Link href="/b">
                <NavLink>B</NavLink>
              </Link>
            </Header>
            <WrappedComponent {...rest} />
          </div>
        </Provider>
      )
    }
  }

const Header = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  padding: 15px;
`

const NavLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`

export default page
