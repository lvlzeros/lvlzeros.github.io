import { navigate } from "gatsby"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    navigate("/blog/")
  }, [])
  return null
}

export default IndexPage
