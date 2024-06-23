import  { useEffect } from 'react';

const ChangeTitle = ({ title }) => {

  useEffect(() => {
    document.title = title;
  }, [title]); 

  return;
};

export default ChangeTitle;
