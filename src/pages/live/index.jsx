import { apiGetPost } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";
import Comments from "./Comments";

export default function Live() {
  const { data } = useQuery({
    queryKey: ["get-post"],
    queryFn: apiGetPost,
  });

  return (
    <div className="grid md:grid-cols-3 md:px-6">
      <div className="md:col-span-2 md:px-2">some bullshit</div>
      <div className="md:col-span-1 md:px-2">
        {!!data?.data?.comments && <Comments comments={data.data.comments} />}
      </div>
    </div>
  );
}
