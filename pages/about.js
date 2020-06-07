import { Component } from "react";
import Error from "./_error";
import Layout from "../components/Layout";

class About extends Component {
  static async getInitialProps() {
    const resp = await fetch(`https://api.github.com/users/octocat`);
    const statusCode = resp.status > 200 ? resp.status : false;
    const user = await resp.json();
    return { user, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <div>A JS developer</div>
        <img src={user.avatar_url} alt="github-avatar" />
      </Layout>
    );
  }
}

export default About;
