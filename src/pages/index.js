import React from "react"
import Helmet from 'react-helmet'
import style from './styles/Index.module.sass'

// Client Components
import Client from '../components/ClientComponents/Client';
import ClientNavbar from '../components/ClientComponents/ClientNavbar';
import Footer from '../components/ClientComponents/Footer'

const IndexPage = () =>(
      	<div className="App">
        <Helmet>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond&amp;display=swap" rel="stylesheet" />
        </Helmet>
        <ClientNavbar />
        <Client />
				<Footer />
      	</div>
)


export default IndexPage
