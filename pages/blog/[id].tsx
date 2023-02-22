import BlogHeader from "@/components/BlogHeader";
import { getBlogDetail } from "@/server/blogs";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import parser from "html-react-parser";
const BlogPost: NextPage = ({
  blogData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { author, bodyHTML, createdAt, title } = blogData;
  return (
    <section className="layout items-center">
      <div className="max-w-[50%]">
        <div className="text-center font-bold text-3xl my-8">{title}</div>
        <div className="flex justify-center my-10">
          <BlogHeader createdAt={createdAt} author={author} />
        </div>
        <div>{parser(bodyHTML)}</div>
      </div>
    </section>
  );
};

export default BlogPost;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id;
  const id = Number(route);
  const blogDetail = await getBlogDetail(id);
  console.log("blogDetail", blogDetail);
  return {
    props: {
      blogData: blogDetail,
    },
  };
};
