import {React, useState } from 'react'
import { FaCar } from 'react-icons/fa'
import ChangeTitle from '../../component/SharedComponents/ChangeTitle'
import Hero from '../../component/HomeComponents/Hero/Hero'
import Footer from '../../component/SharedComponents/Footer/Footer'
import SideLink from '../../component/SharedComponents/sideLink/sideLink'
import MainTitle from '../../component/SharedComponents/MainTitle/MainTitle'
import { useTranslation } from 'react-i18next'
import img from '../../images/Home/unsplash_UF2nwAcD8Mo.png'
import img2 from '../../images/Home/background@3x.png'
import { motion } from "framer-motion";
import { useLanguageContext } from '../../hooks/useLanguageContext';

const carsHero = [
    {
        title: 'Sport',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Luxury',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Family',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Economy',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Convertible',
        icon: <FaCar/>,
        url:"/search"
    }
  ]

  const articles = [
    {
      id: 1,
      title: "Article One",
      summary: "This is a summary of the first article.",
      description: "This is the full description of the first article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
      photo: img,
    },
    {
      id: 2,
      title: "Article Two",
      summary: "This is a summary of the second article. This is a summary of the second article.",
      description: "This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
      photo: img2,
    },
    {
        id: 3,
        title: "Article One",
        summary: "This is a summary of the first article.",
        description: "This is the full description of the first article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
        photo: img,
      },
      {
        id: 4,
        title: "Article Two",
        summary: "This is a summary of the second article. This is a summary of the second article.",
        description: "This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
        photo: img2,
      },
      {
        id: 5,
        title: "Article One",
        summary: "This is a summary of the first article.",
        description: "This is the full description of the first article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
        photo: img,
      },
      {
        id: 6,
        title: "Article Two",
        summary: "This is a summary of the second article. This is a summary of the second article.",
        description: "This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
        photo: img2,
      },
      {
        id: 7,
        title: "Article One",
        summary: "This is a summary of the first article.",
        description: "This is the full description of the first article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
        photo: img,
      },
      {
        id: 8,
        title: "Article Two",
        summary: "This is a summary of the second article. This is a summary of the second article.",
        description: "This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.This is the full description of the second article with more details.",
        photo: img2,
      },
 
  ];
  

const Blogs = () => {
  const { language } = useLanguageContext();
  const [t,il8n]= useTranslation();
  const BlogTitle = t ("BlogTitle");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleShowDetails = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };



    return (
        <div  dir={language === 'AR'? 'rtl':'ltr'}>
            <ChangeTitle title={"MEI | Blogs"} />
            <Hero carsHero={carsHero} />
            <MainTitle title={BlogTitle} />
            <div className="container mx-auto p-4">
                {selectedArticle ? (
                    // عرض التفاصيل عند اختيار مقال
                    <div className="flex flex-col items-center">
                    <img src={selectedArticle.photo} alt={selectedArticle.title} className="w-full md:w-2/3 h-auto object-cover" />
                    <h1 className="text-3xl font-bold mt-4">{selectedArticle.title}</h1>
                    <p className="text-lg mt-2">{selectedArticle.description}</p>
                    <button
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleBackToList}
                    >
                        Back to Articles
                    </button>
                    </div>
                ) : (
                    // عرض قائمة المقالات بشكل عمودي
                    <div className="flex flex-col gap-8">
                    {articles.map((article, index) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, x: 100 }} // بدء العنصر خارج الشاشة من اليمين
                        whileInView={{ opacity: 1, x: 0 }} // تحريك العنصر من اليمين إلى اليسار عند رؤيته
                        transition={{ duration: 0.5, delay: index * 0.2 }} // توقيت الحركة وتتابعها
                        viewport={{ once: false, amount: 0.2 }} // إعادة الحركة في كل مرة يظهر فيها العنصر
                        className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg"
                      >
                        <img src={article.photo} alt={article.title} className="w-[350px] h-[350px] object-cover" />
                        <div className="p-4 w-full md:w-2/3">
                          <h2 className="text-__brown text-3xl font-semibold mb-2">{article.title}</h2>
                          <p className="text-secondary text-xl text-gray-600">{article.summary}</p>
                          <button
                            className="mt-[30px] cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]"
                            onClick={() => handleShowDetails(article)}
                          >
                            View Details
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                </div>
            

            <Footer />
            <SideLink />
        </div>
    )
}

export default Blogs