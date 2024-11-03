import {React, useState, useEffect } from 'react';
import { FaCar } from 'react-icons/fa';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import MainTitle from '../../component/SharedComponents/MainTitle/MainTitle';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { useLanguageContext } from '../../hooks/useLanguageContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const carsHero = [
    { title: 'Sport', icon: <FaCar/>, url:"/search" },
    { title: 'Luxury', icon: <FaCar/>, url:"/search" },
    { title: 'Family', icon: <FaCar/>, url:"/search" },
    { title: 'Economy', icon: <FaCar/>, url:"/search" },
    { title: 'Convertible', icon: <FaCar/>, url:"/search" }
];

const Blogs = () => {
  const { language } = useLanguageContext();
  const [t, i18n] = useTranslation();
  const BlogTitle = t("BlogTitle");

  const [articles, setArticles] = useState([]);
  const [articlesAr, setArticlesAr] = useState([]);
  const [articlesEn, setArticlesEn] = useState([]);
  const [error, setError] = useState(false);
  const Error = t("Error");
  const navigate = useNavigate();


  


  useEffect(() => {
    axios.get("https://seomei.pythonanywhere.com/api/articles/")
      .then((response) => {
        if (response.data.success) {
          const data = response.data.data;

          const arArticles = data.map((item) => ({
            pk: item.pk,
            summary: item.summary_ar,
            description: item.description_ar,
            photo: item.photo,
            link: item.link,
            linkTitle: item.link_title_ar,
          }));

          const enArticles = data.map((item) => ({
            pk: item.pk,
            summary: item.summary_en,
            description: item.description_en,
            photo: item.photo,
            link: item.link,
            linkTitle: item.link_title_en,
          }));

          setArticlesAr(arArticles);
          setArticlesEn(enArticles);
          setArticles(enArticles);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError("An error occurred while fetching data.");
      });
  }, []);

  useEffect(() => {
    setArticles(language === 'AR' ? articlesAr : articlesEn);
    

  }, [language, articlesAr, articlesEn]);

  return (
    <div dir={language === 'AR' ? 'rtl' : 'ltr'}>
      <ChangeTitle title={"MEI | Blogs"} />
      <Hero carsHero={carsHero} />
      {!error ? (
        <div>
          <MainTitle title={BlogTitle} />
          <div className="container mx-auto p-4">
              <div className="flex flex-col gap-8">
                {articles.map((article) => (
                  <motion.div
                    key={article.pk}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: article.pk * 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg"
                  >
                    <img src={"https://seomei.pythonanywhere.com/"+article.photo} alt={article.header} className="w-[350px] h-[350px] object-cover" />
                    <div className="p-4 w-full md:w-2/3">
                      {/* <h2 className="text-__brown text-3xl font-semibold mb-2">{article.header}</h2> */}
                      <p className="text-secondary text-3xl text-gray-600">{article.summary}</p>
                      <button
                        className="mt-[30px] cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]"
                        onClick={() => {navigate("/blogs/"+article.pk)}}
                      >
                        {t("ViewDetails")}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
          </div>
        </div>
      ) : (
        <MainTitle title={Error} />
      )}
      <Footer />
      <SideLink />
    </div>
  );
};

export default Blogs;
