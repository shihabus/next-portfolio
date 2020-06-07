import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>
        {title.toString()[0].toUpperCase()}
        {title.toString().slice(1)} Post
      </a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="react" />
      <PostLink title="angular" />
      <PostLink title="vue" />
    </ul>
  </Layout>
);

export default Blog;
