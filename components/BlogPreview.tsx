import { BlogPost } from "@/types/blog";
import React from "react";
import BlogHeader from "./BlogHeader";

const BlogPreview: React.FC<BlogPost> = (props) => {
  const { title, createdAt, author, tags, bodyText } = props;
  const previewText: string = bodyText?.substring(0, 150) + "...";
  return (
    <section>
      <BlogHeader createdAt={createdAt} author={author} />
      <h2 className="text-bold mt-3">{title}</h2>
      <p className="mt-2">{previewText}</p>
      <div className="flex gap-2">
        {tags?.map((tag, index) => {
          return (
            <p key={index} className="label">
              {tag}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPreview;
