import Article from './Article';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import '../styles/Main.css';
import { useEffect, useState } from 'react';
export default function Main() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch('http://127.0.0.1:3000/api/blogs/');
      setArticles(await response.json());
    };
    getArticles();
  }, []);

  return (
    <main className="main" style={{ borderRadius: '1em' }}>
      <div className="feed__options">
        <div className="sort__options">
          <p>
            <StarBorderOutlinedIcon />
            Personalized
          </p>
          <p>
            <ScheduleOutlinedIcon />
            Recent
          </p>
          <p>
            <AutoFixHighOutlinedIcon />
            Features
          </p>
        </div>
        <p className="space"></p>
        <div className="view__options">
          <p>
            <FilterAltOutlinedIcon />
          </p>
          <p>
            <ViewAgendaOutlinedIcon />
            View
          </p>
        </div>
      </div>
      <article>
        {articles.map((article) => {
          {
            console.table(article);
          }
          return <Article key={article._id} {...article} />;
        })}
      </article>
    </main>
  );
}
