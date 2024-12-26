"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";

const Comment = ({ url, id, title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true if window is defined
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const disqusShortname = "Doob";
  const disqusConfig = {
    url: url,
    identifier: `${id}`,
    title: title,
  };

  if (!isClient) return null;

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

Comment.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
};

export default Comment;
