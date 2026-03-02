import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
    tags: string[];
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/_logo_thedeed.png',
  ogType = 'website',
  article
}) => {
  const fullTitle = `${title} | thedeed - Заказная разработка ПО`;
  const defaultKeywords = 'заказная разработка, веб-приложения, мобильные приложения, React, Node.js, Python, AI, автоматизация бизнеса';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const canonicalUrl = canonical || `https://thedeed.ru${window.location.pathname}`;

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="thedeed" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Дополнительные мета-теги */}
      <meta name="author" content="thedeed" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="ru" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org разметка для статей */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": ogImage,
            "author": {
              "@type": "Organization",
              "name": "thedeed"
            },
            "publisher": {
              "@type": "Organization",
              "name": "thedeed",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thedeed.ru/_logo_thedeed.png"
              }
            },
            "datePublished": article.publishedTime,
            "dateModified": article.modifiedTime,
            "articleSection": article.section,
            "keywords": finalKeywords
          })}
        </script>
      )}
      
      {/* Schema.org разметка для организации */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "thedeed",
          "url": "https://thedeed.ru/",
          "logo": "https://thedeed.ru/_logo_thedeed.png",
          "description": "Заказная разработка веб и мобильных приложений, корпоративных систем и автоматизация бизнес-процессов",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-989-151-45-00",
            "contactType": "customer service",
            "email": "hello@theded.ru"
          },
          "sameAs": [
            "https://github.com/Difyma/thedeed_landing"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead; 