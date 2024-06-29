import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import { phone } from "../../../constant/infoData";

function SideLink (){
    const [t,il8n] = useTranslation();
    
    return(
        <div className="fixed right-[3px] top-[50%] cursor-pointer z-50 flex flex-col justify-center items-center gap-[2px] animate-jump hover:animate-none duration-300">
            <a href={`https://wa.me/${phone}`}  className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] border-[1px] border-solid border-__brown bg-white text-__brown no-underline shadow-[#ccc] duration-300 w-[120px] rounded-md hover:translate-x-[-10%] hover:rounded-[30px]"><FaWhatsapp/>{t("WhatsApp")}</a>
            <a href={`tel:${phone}`} className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] border-[1px] border-solid border-__brown bg-white text-__brown no-underline shadow-[#ccc] duration-300 w-[120px] rounded-md hover:translate-x-[-10%] hover:rounded-[30px]"><FaPhone/>{t("CallUs")}</a>
        </div>
    )
}

export default SideLink;