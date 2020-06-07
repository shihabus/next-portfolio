import Layout from "../components/Layout";
import Link from "next/link";

// Link - as: is what get displayed in address bar as route

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="React Post" slug="react-post" />
      <PostLink title="Angular Post" slug="angular-post" />
      <PostLink title="Vue Post" slug="vue-post" />
    </ul>
  </Layout>
);

export default Blog;
