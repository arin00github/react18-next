import axios from "axios";
import { useQuery } from "react-query";
import { PageTitle } from "../../src/layout/PageTitle";

type PostData = {
  body: string;
  title: string;
  id: number;
  userId: number;
};

const ReactQueryIndex = () => {
  const { data, error, status } = useQuery<PostData[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });

  return (
    <div>
      <PageTitle>React Query</PageTitle>

      <div>
        {data &&
          data.map((post, idx) => {
            return <p key={`post_${idx}`}>{post.title}</p>;
          })}
      </div>
    </div>
  );
};

export default ReactQueryIndex;
