import React from 'react';

const UrlList = ({ urls }) => {
  return (
    <ul>
      {urls.map((item, index) => {
        return <li key={item.id}>{item.url}</li>;
      })}
    </ul>
  );
};

export default UrlList;
