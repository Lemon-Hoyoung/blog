import Router from 'next/router';
import Link from 'next/link';
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import ArticleList from '../components/Article/Article';
import Author from "../components/Author/Author";

export default function Home() {
  return (
    <div>
      <Header />
      <Content LeftContent={<ArticleList />} RightContent={<Author />}/>
    </div>
  )
}
