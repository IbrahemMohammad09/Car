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
        <div>
            <ChangeTitle title="MEI | Blogs" />
            <Hero carsHero={carsHero} />
            {error ? (
                <p>Article not found.</p>
            ) : (
                article && (
                    <div className="mt-8 p-4 flex flex-col md:flex-row justify-between items-start rounded-lg overflow-hidden shadow-md">
                        <div className="md:w-1/3 space-y-2">
                        
                            <img
                                src={"https://seomei.pythonanywhere.com/" + article.photo}
                                className="w-full h-auto object-cover shadow-lg rounded-md" // استخدم w-full لجعل الصورة تأخذ عرض الحاوية
                                alt="Article"
                            />
                            <div className='flex flex-row'>
                                <a
                                    href='/blogs'
                                    className="mr-8 mt-4 cursor-pointer border border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-2 px-8"
                                >
                                    {t("backtoart")}
                                </a>
                                <a
                                    href={article.link} 
                                    target="_blank"
                                    className="mt-4 cursor-pointer border border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-2 px-8"
                                >
                                    {article.linkTitle}
                                </a>
                            </div>
                            
                        </div>
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
