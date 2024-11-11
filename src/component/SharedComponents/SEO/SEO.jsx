import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguageContext } from '../../../hooks/useLanguageContext'

const SEO = ({ title, description,state,  keywords, name, type = [] }) => {
    const {language} = useLanguageContext();
  return (
    <Helmet>
        {/* Standard SEO tags */}
        {title && <title>{title}</title>}
        {description && <meta name='description' content={description}/>}
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} /> }
        {state.length > 0 && <meta name='robots' content={state}/>}
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/* Set language for content (consider setting lang on <html> element) */}
        {language && <meta http-equiv="content-language" content={language} />}

        {/* Open Graph / Facebook Meta Tags */}
        {type && <meta property="og:type" content={type} />}
        {title && <meta property='og:title' content={title}/>}
        {description && <meta property='og:descrription' content={description}/>}
        <meta property='og:image' content='https://meirentacar.com//favicon.png' />
        {/* Twitter Meta Tags */}
        {name && <meta name="twitter:creator" content={name} />}
        {type && <meta name="twitter:card" content={type} />}
        {title && <meta name='twitter:title' content={title}/>}
        {description && <meta name='twitter:description' content={description}/>}
        <meta name='twitter:image' content='https://meirentacar.com//favicon.png' />
    </Helmet>
  )
}

export default SEO