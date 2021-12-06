import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import BlogCard from "../../components/BlogCard";

const index = () => {
  const querry: any = useStaticQuery(graphql`
    query {
      allContentfulGatsbyBlogs {
        nodes {
          title
          blogMedia {
            file {
              url
            }
            updatedAt
          }
          blogDescription {
            raw
          }
        }
      }
    }
  `);

  const { allContentfulGatsbyBlogs } = querry;
  // const uniqueAddresses = Array.from(
  //   new Set(allContentfulGatsbyBlogs.nodes.map((a) => a.title))
  // ).map((title) => {
  //   return allContentfulGatsbyBlogs.nodes.find((a) => a.title === title);
  // });
  return (
    <div className="my-5" id="blogs">
      {allContentfulGatsbyBlogs.nodes.map((blog) => {
        return <BlogCard blog={blog} key={blog.title} />;
      })}
    </div>
  );
};

export default index;
