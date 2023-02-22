interface BlogHeaderProps {
  createdAt: string;
  author: {
    name: string;
    avatar: string;
    url: string;
  };
}
const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  const { createdAt, author } = props;
  const createDate: Date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className="flex gap-2">
      <img
        src={author.avatar}
        alt="avatar"
        className="rounded-[50%] object-cover w-10 h-10 md:w-[50px] md:h-[50px]"
      />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[1rem]">{author.name}</p>
        <div className="flex gap-4 font-normal text-[0.85rem]">
          <p>{author.url}</p>
          <p>{createDate.toLocaleDateString("en-US", options)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
