import { useState, useEffect } from "react"

function useScorllPosition() {
  const [scrollPostion, setScrollPostion] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPostion(window.scrollY)
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPostion
}

export default useScorllPosition