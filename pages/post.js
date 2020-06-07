import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router: { query } }) => (
  <Layout title={query.title}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      fugiat tenetur culpa natus perspiciatis impedit itaque aliquam maiores,
      reprehenderit consectetur dolores ad enim dolorum minus optio quasi.
      Soluta, recusandae ut!
    </p>
  </Layout>
);
export default withRouter(Post);

// /post?title='react'
