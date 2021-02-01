import { AiOutlineHome } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const HomeIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={ { className: icoClasses, } }>
      <AiOutlineHome aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default HomeIco