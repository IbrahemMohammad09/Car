import { Link } from "react-router-dom"
import MainTitle from "../MainTitle/MainTitle"
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';



const arr2 = [
    {
        title: 'Toyota',
        url: '/',
    },
    {
        title: 'Porsche',
        url: '/',
    },
    {
        title: 'Audi',
        url: '/',
    },
    {
        title: 'BMW',
        url: '/',
    },
    {
        title: 'Ford',
        url: '/',
    },
    {
        title: 'Nissan',
        url: '/',
    },
    {
        title: 'Peugeot',
        url: '/',
    },
    {
        title: 'Volkswagen',
        url: '/',
    },
]



const arr4 = [
    {
        icon: <FaWhatsapp className="text-__brown text-[1.4rem]"/>,
        url: '/',
    },
    {
        icon: <FaPhone className="text-__brown text-[1.4rem]"/>,
        url: '/',
    },
]
const Footer = () => {
    const [t,il8n]=useTranslation();
    const home =t("NavHome");
    const about =t("NavAboutUS");
    const FooterTitle =t("FooterTitle");

    const work1=t("WorkTime1");
    const work2=t("WorkTime2");
    const work3=t("WorkTime3");
    const arr3 = [
        work1,
        work2,
        work3,
    ]
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

    return (
        <footer className="w-full bg-white">
            <MainTitle title={FooterTitle}/>
            <div className="flex flex-col md:flex-row justify-between container mx-auto gap-[33px]">
                <div className="flex gap-[60px] max-[500px]:justify-center">
                    <div className="flex flex-col gap-[11px] max-[500px]:items-center">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{t("Pages")}</h1>
                        {arr1.map((e, i) => <Link className="font-normal no-underline duration-300 md:hover:translate-x-[10px] leading-[27.75px] text-black text-[15px]" key={i} to={e.url}>{e.title}</Link>)}
                    </div>
                    <div className="flex flex-col gap-[11px] max-[500px]:items-center">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{t("Brands")}</h1>
                        {arr2.map((e, i) => <Link className="font-normal no-underline duration-300 md:hover:translate-x-[10px] leading-[27.75px] text-black text-[15px]" key={i} to={'/'}>{e.title}</Link>)}
                    </div>
                </div>
                <div className="flex flex-col gap-[33px] max-[500px]:items-center">
                    <div className="flex flex-col gap-[11px] max-[500px]:items-center">
                        <h1 className="text-__brown text-[1.6rem] font-medium leading-[24px]">{FooterTitle}</h1>
                        {arr3.map((e, i) => <h2 key={i} className="font-normal leading-[27.75px] text-black text-[15px]">{e}</h2>)}
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
                <p className="my-[36px] text-[15px] leading-[27.75px] font-normal container mx-auto">© 2024 Powerd by SPARK. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer