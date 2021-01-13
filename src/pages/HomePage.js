import React from "react";
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "praesent tristique magna sit amet purus gravida",
    author: "et egestas",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut, sit animi dolorum fuga aliquam ducimus ea inventore natus qui adipisci corporis rem at velit assumenda, sint explicabo ipsum incidunt.",
  },
  {
    id: 2,
    title: "sed odio morbi quis commodo odio",
    author: "aliquam malesuada",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et consequatur, fugiat impedit, quibusdam fuga tenetur inventore commodi aperiam tempore deleniti explicabo dignissimos ducimus. Nostrum consequuntur libero error architecto illo?",
  },
  {
    id: 3,
    title: "massa tempor nec feugiat nisl pretium",
    author: "in cursus",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat eius aspernatur amet tempore repudiandae repellendus. Ut, molestiae reprehenderit cum, magni quos consequatur deleniti, id corporis animi numquam perspiciatis sapiente!",
  },
];
const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className='home'>
      {artList}
    </div>
  );
};

export default HomePage;
