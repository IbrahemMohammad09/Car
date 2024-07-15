import React, { createContext, useState, useEffect } from 'react';

export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
  const [searchbrands, setSearchBrands] = useState(() => localStorage.getItem('searchbrands') || '');
  const [searchcategory, setSearchCategory] = useState(() => localStorage.getItem('searchcategory') || '');
  const [searchname, setSearchName] = useState(() => localStorage.getItem('searchname') || '');

  useEffect(() => {
    localStorage.setItem('searchbrands', searchbrands);
  }, [searchbrands]);

  useEffect(() => {
    localStorage.setItem('searchcategory', searchcategory);
  }, [searchcategory]);

  useEffect(() => {
    localStorage.setItem('searchname', searchname);
  }, [searchname]);

  const clearStorage = () => {
    localStorage.removeItem('searchbrands');
    localStorage.removeItem('searchcategory');
    localStorage.removeItem('searchname');
    setSearchBrands('');
    setSearchCategory('');
    setSearchName('');
  };

  return (
    <StorageContext.Provider value={{ searchbrands, setSearchBrands, searchcategory, setSearchCategory, searchname, setSearchName,clearStorage }}>
      {children}
    </StorageContext.Provider>
  );
};
