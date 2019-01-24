import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from './../sass/style.scss';

const HRJSONExample = `{
  "tag": "div",
  "atts": {
    "style": {
      "width": "18rem"
    },
    "className": "card"
  },
  "children": [
    {
      "tag": "img",
      "atts": {
        "src": "https://placehold.it/800x600",
        "className": "card-img-top",
        "alt": "An image"
      },
      "children": []
    },
    {
      "tag": "div",
      "atts": {
        "className": "card-body"
      },
      "children": [
        {
          "tag": "h5",
          "atts": {
            "className": "card-title"
          },
          "children": "Card title"
        },
        {
          "tag": "p",
          "atts": {
            "className": "card-text"
          },
          "children": "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          "tag": "a",
          "atts": {
            "href": "#",
            "className": "btn btn-primary"
          },
          "children": "Go somewhere"
        }
      ]
    }
  ]
}`;
const ParsedDOMObject = JSON.parse(HRJSONExample);

export default class DOMObject extends Component {
  render() {
    // Get the DOM Object Three: Tag name, Tag attributes, Tag children
    const Tag = this.props.DOMObject.tag;
    const children = this.props.DOMObject.children;
    const atts = this.props.DOMObject.atts;
    // If the DOMObject has children
    if (children.length > 0) {
      return(
        <Tag {...atts}>
          {Array.isArray(children) && children.map((child, index) => {
            return <DOMObject key={index} DOMObject={child} />;
          })}
          {!Array.isArray(children) &&
            children
          }
        </Tag>
      );
    }
    else {
      return <Tag {...atts} />
    }
    return null;
  }
}

const app = document.getElementById("App");
if (app) {
  ReactDOM.render(<DOMObject DOMObject={ParsedDOMObject} />, app);
}
