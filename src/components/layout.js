import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "./header"
import SEO from "./seo"
import "./layout.css"
import useSiteMetadata from "../hooks/useSiteMetadata"

const styles = {
	container: {},
	content: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		margin: '10em 0 3em 0'
	}
}

const Layout = ({ children }) => (
		<>
			<SEO />
			<Header />
			<div style={styles.content}>
				<main style={{ maxWidth: '960px' }}>{children}</main>
			</div>
		</>
	)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
