import React from "react"
import { Link } from "gatsby"

// Client Components
import Client from '../components/ClientComponents/Client';
import ClientNavbar from '../components/ClientComponents/ClientNavbar';
import Calendar from '../Components/ClientComponents/Calendar';
import AboutUs from '../Components/ClientComponents/AboutUs';
import FAQ from '../Components/ClientComponents/FAQ';
import Gallery from '../Components/ClientComponents/Gallery';
import ReachOut from '../Components/ClientComponents/ReachOut';

const IndexPage = () =>(
			<Router>
				<ScrollToTop>
      	<div className="App">
        <ClientNavbar />
					<Switch>
						<Route exact path = '/' component={Client} />
						<Route exact path = '/events' component={Calendar} />
						<Route exact path = '/aboutus' component={AboutUs} />
						<Route exact path = '/faqs' component={FAQ} />
						<Route exact path = '/gallery' component={Gallery} />
						<Route exact path = '/reachout' component={ReachOut} />
					</Switch>

					<Footer />
      	</div>
				</ScrollToTop>
			</Router>
)


export default IndexPage
