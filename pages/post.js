import Layout from "../components/Layout";

const Post = ({ url: { query } }) => (
  <Layout title={query.title}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      fugiat tenetur culpa natus perspiciatis impedit itaque aliquam maiores,
      reprehenderit consectetur dolores ad enim dolorum minus optio quasi.
      Soluta, recusandae ut!
    </p>
  </Layout>
);
export default Post;

// /post?title='react'
