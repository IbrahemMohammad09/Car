import { Link } from "react-router-dom"

const MainButton = ( { name, url } ) => {
    return (
        <Link to={url || '#'} className="cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]">{name}</Link>
    )
}

export default MainButton