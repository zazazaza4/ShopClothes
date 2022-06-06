import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={350}
    viewBox="0 0 300 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="6" rx="0" ry="0" width="300" height="350" />
  </ContentLoader>
)

export default Skeleton;