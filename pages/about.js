import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <div>A JS developer</div>
    <img src="/static/js-logo.png" alt="js-logo" />
  </Layout>
);

export default About;
