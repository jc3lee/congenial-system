import { AiOutlineMenu } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const MenuIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiOutlineMenu aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default MenuIco