import React from 'react'
import Helmet from 'react-helmet'
import style from './styles/Index.module.sass'

// Client Components
import Client from '../components/ClientComponents/Client'
import Layout from '../components/layout.js'

const IndexPage = () => (
  <Layout>
    <Client />
  </Layout>
)

export default IndexPage
