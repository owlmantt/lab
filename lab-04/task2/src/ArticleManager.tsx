import { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

interface Article {
  id: number;
  title: string;
  summary: string;
}

const ArticleManager = () => {
  const [articles, setArticles] = useState<Article[]>([
    { id: 1, title: 'React Hooks', summary: 'Learn about useState and useEffect' },
  ]);

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const onClickAdd = () => {
    if (!title || !summary) return;
    const newArticle = { id: Date.now(), title, summary };
    setArticles([...articles, newArticle]);
    setTitle(''); 
    setSummary('');
  };

 
  const onClickRemove = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      {}
      <AddArticle 
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e: any) => setTitle(e.target.value)}
        onChangeSummary={(e: any) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      {}
      <ArticleList 
        articles={articles} 
        onClickRemove={onClickRemove} 
      />
      
      {}
    </div>
  );
};

export default ArticleManager;