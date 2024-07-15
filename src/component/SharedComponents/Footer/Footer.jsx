import { Link, useNavigate } from "react-router-dom"
import MainTitle from "../MainTitle/MainTitle"
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../../constant/api";
import { useTranslation } from 'react-i18next';
import { phone } from "../../../constant/infoData";
import { LanguageContext } from "../../../context/LanguageContext";
import { useLanguageContext } from "../../../hooks/useLanguageContext";
import { useContext } from "react";
import { StorageContext } from "../../../context/SearchContext";



const arr3 = [
    "Monday – Friday: 09:00AM – 09:00 PM",
    "Saturday: 09:00AM – 07:00PM",
    "Sunday: Closed",
]

const arr4 = [
    {
        icon: <FaWhatsapp className="text-__brown text-[2rem]"/>,
        url: 'https://wa.me/'+phone,
    },
    {
        icon: <FaPhone className="text-__brown text-[2rem]"/>,
        url: 'tel:'+phone,
    },
]
const Footer = () => {

    const { searchbrands, setSearchBrands, searchcategory, setSearchCategory, searchname, setSearchName,clearStorage } = useContext(StorageContext);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get(API.GET.ALLBRANDS)
            .then(res => {
                if(res?.data.state === 'success') {
                    setBrands(res?.data?.brands);
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, []);

    const [t,il8n]=useTranslation();
    const home =t("NavHome");
    const about =t("NavAboutUS");
    const FooterTitle =t("FooterTitle");

    const work1=t("WorkTime1");
    
    const arr1 = [
        {
            title: home,
            url: '/',
        },
        {
            title: about,
            url: '/about-us',
        },
    ];
    const navigate = useNavigate();

    const { language } = useLanguageContext();

    return (
        <footer className="w-full bg-white" dir={language === 'AR'? 'rtl':'ltr'}>
            <MainTitle title={FooterTitle}/>
            <div className="flex flex-col md:flex-row justify-between container mx-auto gap-[33px]">
                <div className="flex gap-[60px] max-[500px]:justify-center">
                    <div className="flex flex-col gap-[11px] max-[500px]:items-center">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{t("Pages")}</h1>
                        {arr1.map((e, i) => <Link className="font-normal no-underline duration-300 md:hover:translate-x-[10px] leading-[27.75px] text-black text-[15px]" key={i} to={e.url}>{e.title}</Link>)}
                    </div>
                    {brands?.length > 0 && <div className="flex flex-col gap-[11px] max-[500px]:items-center">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{t("Brands")}</h1>
                        {brands && brands?.map((e, i) => i <= 7 && <span onClick={()=>{setSearchBrands(e.name);navigate("/search/"+e.name)}} className="font-normal no-underline duration-300 md:hover:translate-x-[10px] leading-[27.75px] text-black text-[15px] cursor-pointer" key={i}>{e.name}</span>)}
                    </div>}
                </div>
                <div className="flex flex-col gap-[33px] max-[500px]:items-center">
                    <div className="flex flex-col gap-[11px] max-[500px]:items-center">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{FooterTitle}</h1>
                        {/* {arr3.map((e, i) => <h2 key={i} className="font-normal leading-[27.75px] text-black text-[15px]">{e}</h2>)} */}
                        <h2 className="font-normal leading-[27.75px] text-black text-[15px]">
                            {work1}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-[11px]">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{t("Contact")}</h1>
                        <div className="flex gap-[20px] max-[500px]:justify-center">
                            {arr4.map((e, i) => <a key={i} href={e.url} className="duration-300 md:hover:scale-110">{e.icon}</a>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-solid border-[#ccc] mt-[55px] max-[500px]:text-center">
            <p className="my-[36px] text-[15px] leading-[27.75px] font-normal container mx-auto text-center" dir="ltr">
                <a target="_blank" href="https://sparkengdev.com/" className="no-underline text-black">
                    © 2024 Powered by SPARK. All rights reserved.
                </a>
            </p>
            </div>
        </footer>
    )
}

export default Footer