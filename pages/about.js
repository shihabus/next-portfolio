import { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
// import fetch from "isomorphic-unfetch";

class About extends Component {
  state = {
    user: this.props.user,
  };

  // this runs in server
  static getInitialProps() {
    return fetch(`https://api.github.com/users/octocat`)
      .then((res) => res.json())
      .then((data) => ({ user: data }));
  }

  // this runs on client
  // componentDidMount = () => {
  //   fetch(`https://api.github.com/users/octocat`)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ user: data }));
  // };

  render() {
    return (
      <Layout title="About">
        <Link href="/">
          <a>Go to Home</a>
        </Link>
        {JSON.stringify(this.state.user)}
        <div>A JS developer</div>
        <img src="/static/js-logo.png" alt="js-logo" />
      </Layout>
    );
  }
}

// About.getInitialProps = () => {

// }

export default About;
