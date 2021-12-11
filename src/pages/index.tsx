import React from "react";
import { graphql } from "gatsby";
import styles from "./index.module.css";
import Header from "../components/Header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <div className={styles.card}>
        <img
          src={data.allContentfulBlogPost.edges[0].node.image.file.url}
          className={styles.img}
        />
        <h5>{data.allContentfulBlogPost.edges[0].node.title}</h5>
        <div>{data.allContentfulBlogPost.edges[0].node.publication}</div>
        <div>
          {documentToReactComponents(
            data.allContentfulBlogPost.edges[0].node.content.raw
          )}
        </div>
      </div>
      <div className={styles.card}>
        <img
          src={data.allContentfulBlogPost.edges[1].node.image.file.url}
          className={styles.img}
        />
        <h5>{data.allContentfulBlogPost.edges[1].node.title}</h5>
        <div>{data.allContentfulBlogPost.edges[1].node.publication}</div>
        <div>
          {documentToReactComponents(
            data.allContentfulBlogPost.edges[1].node.content.raw
          )}
        </div>
      </div>
      <div className={styles.card}>
        <img
          src={data.allContentfulBlogPost.edges[2].node.image.file.url}
          className={styles.img}
        />
        <h5>{data.allContentfulBlogPost.edges[2].node.title}</h5>
        <div>{data.allContentfulBlogPost.edges[2].node.publication}</div>
        <div>
          {documentToReactComponents(
            data.allContentfulBlogPost.edges[2].node.content.raw
          )}
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          content {
            raw
          }
          publication
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
