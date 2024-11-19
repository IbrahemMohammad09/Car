import { FaCar } from 'react-icons/fa';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const carsHero = [
    { title: 'Sport', icon: <FaCar/>, url: "/search" },
    { title: 'Luxury', icon: <FaCar/>, url: "/search" },
    { title: 'Family', icon: <FaCar/>, url: "/search" },
    { title: 'Economy', icon: <FaCar/>, url: "/search" },
    { title: 'Convertible', icon: <FaCar/>, url: "/search" }
];

const Article = () => {

    const [t, i18n] = useTranslation();

    const [article, setArticle] = useState();
    
    const [error, setError] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            window.scrollTo(0, 700)
          }, 800)   
          
        axios.get("https://seomei.pythonanywhere.com/api/articles/")
            .then((response) => {
                if (response.data.success) {
                    const data = response.data.data;

                    const id = parseInt(pathname.replace("/blogs/", ""), 10);


                    const selectedArticle = data.find((item) => item.pk === id);


                    if (selectedArticle){


                        const enArticle = {
                            pk: selectedArticle.pk,
                            header:selectedArticle.header_en,
                            summary: selectedArticle.summary_en,
                            description: selectedArticle.description_en,
                            photo: selectedArticle.photo,
                            link: selectedArticle.link,
                            linkTitle: selectedArticle.link_title_en,
                        };
                        setArticle(enArticle);
                    }else{
                        navigate("/error");
                    }

                } else {
                    setError(true);
                    navigate("/error");
                }




            })
            
            .catch(() => setError(true));
    }, []);


    return (
        <div className="min-h-screen w-full bg-white overflow-x-hidden">
            <ChangeTitle title="MEI | Blogs" />
            <Hero carsHero={carsHero} />
            {error ? (
                <p>Article not found.</p>
            ) : (
                article && (
                    <div className="mt-8 p-4 flex flex-col md:flex-row justify-center items-start rounded-lg overflow-hidden shadow-md">
                        <a
                            href='/blogs'
                            className="mr-8 mt-4 cursor-pointer border border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-2 px-8 "
                        >
                            {t("backtoart")}
                        </a>                            
                        <div className="md:w-2/3 m-[10px] flex flex-col justify-start">
                            <h2 className="text-__brown text-5xl font-semibold mb-5">{article.header}</h2>
                            <div dangerouslySetInnerHTML={{ __html: article.description }} className="prose" />
                        </div>
                    </div>
                )
            )}
            
            <SideLink />
            <Footer />
        </div>
    );
};

export default Article;
