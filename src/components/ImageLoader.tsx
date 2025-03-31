import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  imageName: string;
};

const ImageLoader: React.FC<Props> = ({ imageName }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  `);

  const imageData = data.allFile.nodes.find(
    (node: { relativePath: string }) => node.relativePath === imageName
  );

  // const image = getImage(data.allFile.nodes[0]?.childImageSharp);

  if (!imageData) return <p>Image not found</p>;

  const image = getImage(imageData);
  if (!image) return <p>Image not found</p>;

  return <GatsbyImage image={image} alt="Dynamic Image" />;
};

export default ImageLoader;
