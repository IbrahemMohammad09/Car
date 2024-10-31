import { FaCar } from 'react-icons/fa';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const carsHero = [
    { title: 'Sport', icon: <FaCar/>, url:"/search" },
    { title: 'Luxury', icon: <FaCar/>, url:"/search" },
    { title: 'Family', icon: <FaCar/>, url:"/search" },
    { title: 'Economy', icon: <FaCar/>, url:"/search" },
    { title: 'Convertible', icon: <FaCar/>, url:"/search" }
];

const Article = () => {
    const language = useLanguageContext();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://seomei.pythonanywhere.com/api/articles/")
            .then((response) => {
                if (response.data.success) {
                    const data = response.data.data;
                    
                    // استخراج `id` من `pathname`
                    const id = parseInt(pathname.replace("/blogs/", ""), 10);

                    // العثور على المقال الذي يطابق `id`
                    const selectedArticle = data.find((item) => item.pk === id);

                    if (selectedArticle) {
                        // اختيار الحقول حسب اللغة
                        const articleData = {
                            pk: selectedArticle.pk,
                            header: language === 'AR' ? selectedArticle.header_ar : selectedArticle.header_en,
                            summary: language === 'AR' ? selectedArticle.summary_ar : selectedArticle.summary_en,
                            description: language === 'AR' ? selectedArticle.description_ar : selectedArticle.description_en,
                            photo: selectedArticle.photo,
                            link: selectedArticle.link,
                            linkTitle: language === 'AR' ? selectedArticle.link_title_ar : selectedArticle.link_title_en
                        };

                        setArticle(articleData);
                    } else {
                        setError(true);
                        navigate("/error")
                        
                    }
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true));
    }, [pathname, language]);

    return (
        <div dir={language === 'AR' ? 'rtl' : 'ltr'}>
            <ChangeTitle title="MEI | Blogs" />
            <Hero carsHero={carsHero} />
            {error ? (
                <p>Article not found.</p>
            ) : (
                article && (
                    <div>
                        <h1>{article.header}</h1>
                        <p>{article.summary}</p>
                        <div dangerouslySetInnerHTML={{ __html: article.description }} />
                        <img src={article.photo} alt="Article" />
                        <a href={article.link}>{article.linkTitle}</a>
                    </div>
                )
            )}
            <SideLink />
            <Footer />
        </div>
    );
};

export default Article;
