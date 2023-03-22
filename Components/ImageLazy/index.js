import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
const LazyLoadImageCustoms = styled(LazyLoadImage)`
  height: 100%;
  /* height: fit-content; */
`
const ImageLazy = ({ className = '', draggable = false, alt, src, width, height, effect = 'blur', style, ...props }) => {
  return (
    <LazyLoadImageCustoms
      className={className}
      draggable={draggable}
      alt={alt}
      src={src} // use normal <img> attributes as props
      width={width}
      effect={effect}
      style={style}
      height={height}
      {...props}
    />
  )
}

export default ImageLazy
