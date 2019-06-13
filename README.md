<h1 align="center">
 HUVO Gatsby-derived static site generation code
</h1>

## Usage
Deploy direct to Netlify and you should have a working site. The site is configured to work with Netlify CMS, so all content except for the very few configuration items document below should be drawn from there.

## Configuration
Most of the site can be configured from the gatsby-config.js file

```javascript
siteMetadata: {
  title, description, and author seem self-explanatory
    menuLinks: [{ name: String, link: String}] is a list of the menu links in the Navbar and footer. Name is the string displayed and link is the address the link will point to
    mission: String is the mission statement on the splash page
  },
  plugins:  these are the Gatsby plugins the site uses, please don't edit these if you don't understand what they are
}
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/e89f1121-764f-4e67-b62f-94a8c55400ce/deploy-status)](https://app.netlify.com/sites/nostalgic-blackwell-d4188f/deploys)
