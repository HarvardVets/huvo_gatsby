import React from 'react'
import Ajax from '../ajax.js'
import style from '../styles/gallery.module.sass'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
      loaded: false,
    }
  }

  async componentDidMount() {
    try {
      let gallery = await Ajax.getAllGalleryImages()
      this.setState({
        gallery,
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className={style.page}>
        <h3 className={style.tag}>Gallery</h3>
        {this.state.gallery.length <= 0 ? (
          <div className={style.container}>
            <h4>Check back soon for some new photos!</h4>
          </div>
        ) : (
          <div
            className={style.container}
            style={this.state.loaded ? {} : { display: 'none' }}
          >
            {this.state.gallery.map(img => (
              <div key={img.id} className={style.imagecontainer}>
                <img
                  src={img.url}
                  alt={img.caption}
                  onLoad={() => this.setState({ loaded: true })}
                />
                <div className={style.caption}>
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}
