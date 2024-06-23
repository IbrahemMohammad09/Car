import { useLanguageContext } from "../../../hooks/useLanguageContext"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [t , il8n] = useTranslation();
    const { language, dispatch } = useLanguageContext();
    const handleLanguageChange = () => {
        dispatch({type: language === 'EN'? 'AR': 'EN'});
        if (language === 'EN'){
            il8n.changeLanguage('ar');
        } else{
            il8n.changeLanguage('en');
        }
        
    }

    return (
        <div 
            className="bg-__opacity_white flex justify-center rounded-[44px] absolute top-[98px] left-[50%] translate-x-[-50%] overflow-hidden shadow-sm shadow-[#ccc]">
            <Link className="text-white no-underline duration-300 hover:bg-__brown py-[13px] ps-[32px] pe-[16px]" to={'/'}>{t("NavHome")}</Link>
            <Link className="text-white no-underline duration-300 hover:bg-__brown py-[13px] pe-[16px] ps-[16px]" to={'/about-us'}>{t("NavAboutUS")}</Link>
            <Link className="text-white no-underline duration-300 hover:bg-__brown py-[13px] pe-[32px] ps-[16px]" onClick={handleLanguageChange}>{language}</Link>
        </div>
    )
}

export default Header