import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onClickRemove }: any) => (
  <ul>
    {articles.map((article: any) => (
      <ArticleItem key={article.id} article={article} onClickRemove={onClickRemove} />
    ))}
  </ul>
);
export default ArticleList;