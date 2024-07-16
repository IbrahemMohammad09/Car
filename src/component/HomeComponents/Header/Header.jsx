import { useLanguageContext } from "../../../hooks/useLanguageContext"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Header = () => {
    const [t , il8n] = useTranslation();
    const { language, dispatch } = useLanguageContext("EN");
    const handleLanguageChange = () => {
        dispatch({type: language === 'EN'? 'AR': 'EN'});
        if (language === 'EN'){
            il8n.changeLanguage('ar');
        } else{
            il8n.changeLanguage('en');
        }
    }

    const { pathname } = useLocation();

    useEffect(() => {
        if(language === 'EN') {
            il8n.changeLanguage('en');
        } else {
            il8n.changeLanguage('ar');
        }
    }, [pathname]);

    return (
        <div 
            dir={language === 'AR'? 'rtl': 'ltr'}
            className="bg-__opacity_white flex justify-center rounded-[44px] absolute top-[1rem] min-[1900px]:top-[4rem] left-[50%] translate-x-[-50%] overflow-hidden shadow-sm shadow-[#ccc]">
            <Link className={`text-white text-nowrap no-underline duration-300 md:hover:bg-__brown py-[13px] ps-[32px] pe-[16px] ${!pathname?.includes('about-us') && !pathname?.includes('search') ? 'bg-__brown': ''}`} to={'/'}>{t("NavHome")}</Link>
            <Link className={`text-white text-nowrap no-underline duration-300 md:hover:bg-__brown py-[13px] pe-[16px] ps-[16px] ${pathname?.includes('about-us')? 'bg-__brown': ''}`} to={'/about-us'}>{t("NavAboutUS")}</Link>
            <Link className="text-white text-nowrap no-underline duration-300 md:hover:bg-__brown py-[13px] pe-[32px] ps-[16px]" onClick={handleLanguageChange}>{language === 'EN'? 'AR':'أجنبي'}</Link>
        </div>
    )
}

export default Header