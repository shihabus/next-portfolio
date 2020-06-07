import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home">
    <Link href="/about">
      <a>Go to About</a>
    </Link>
    <div>Welcome to Home Page</div>
  </Layout>
);

export default Index;
