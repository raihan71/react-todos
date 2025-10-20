import { Component } from "react";
import { Text, Heading } from "@react-spectrum/text";

export default class About extends Component {
  render() {
    return (
      <section>
        <Heading level={1}>Welcome to ReactTodos!</Heading>
        <Text>
          This site built with React + pico.css, react-query & react-spectrum
          without react-router for navigation.
        </Text>
        <h1>hello world</h1>
        <button>
          <img
            src="https://reactjs.org/logo-og.png"
            alt="React Logo"
            width="50"
          />
        </button>
      </section>
    );
  }
}
