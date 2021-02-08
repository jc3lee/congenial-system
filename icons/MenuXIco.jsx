import { HiX } from "react-icons/hi"
import { IconContext } from "react-icons/lib"

const MenuXIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <HiX aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default MenuXIco