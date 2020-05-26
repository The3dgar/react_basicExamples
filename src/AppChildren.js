import React from "react";
import PropTypes from "prop-types";

class Box extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid red", margin: 10 }}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends React.Component {
  // estos avisos estan desactivados en prod
  static propTypes = {
    author: PropTypes.string.isRequired,
  };

  render() {
    const { author, children, date, title } = this.props;
    return (
      <section
        style={{ border: "1px solid black", fontSize: "14px", margin: "10px" }}
      >
        <h2>{title}</h2>
        {author && (
          <p>
            <em>Escrito por: {author}</em>
          </p>
        )}

        <Box>{date}</Box>
        <article>{children}</article>
      </section>
    );
  }
}

export default class extends React.Component {
  render() {
    return (
      <div>
        Hola mundo desde componentes children
        <Box>Hola desde el children</Box>
        <Box>otro contenido</Box>
        <Article
          // author="Edgar Olivar"
          // author={true}
          title="El primer children con props en React"
          date={new Date().toLocaleDateString()}
        >
          <p>
            El contenido más profundo que puedes imaginar,
            <strong>Camaron que se duerme se lo lleva la corriente</strong>
          </p>
        </Article>
        <Article
          author="Mari Carmen"
          title="El Segundo children con props en React"
          date={new Date().toLocaleDateString()}
        >
          <p>
            El contenido más profundo que puedes imaginar,
            <strong>De tal palo, tal astilla</strong>
          </p>
        </Article>
        <Article
          author="Juanito"
          title="El otro children con props en React"
          date={new Date().toLocaleDateString()}
        >
          <p>
            El contenido más profundo que puedes imaginar,
            <strong>
              vale la pena luchar por lo que vale la pena tener #bless
            </strong>
          </p>
        </Article>
      </div>
    );
  }
}
