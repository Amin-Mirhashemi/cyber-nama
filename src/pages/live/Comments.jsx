import pt from "prop-types";
import avatar from "/avatar.svg";
import { useState } from "react";
import { useContext } from "react";
import moment from "moment-jalaali";
import Icon from "@/components/icon";
import { apiComment } from "@/api/posts";
import Send from "@/components/icon/Send";
import Arrow from "@/components/icon/Arrow";
import useMobileDetect from "@/hooks/screen-size";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "@/providers/AuthProvider";

moment.loadPersian();

function Comments({ comments }) {
  const isMobile = useMobileDetect();

  const { user } = useContext(AuthContext);

  const [showComments, setShowComments] = useState(false);

  const [text, setText] = useState("");
  const [localComments, setLocalComments] = useState([]);

  const sendComment = useMutation({
    mutationFn: () => apiComment(text),
    onSuccess: () => {
      setLocalComments((prev) => [
        ...prev,
        { text, creator: user, createdAt: Date.now() },
      ]);
      setText("");
    },
  });

  return (
    <div className="bg-primary-dark md:rounded-[20px] w-full">
      <div
        className="p-4 md:p-6 flex items-center gap-2"
        onClick={() => setShowComments((prev) => !prev)}
      >
        <b className="md:text-xl">نظرات</b>
        <span className="text-gray text-sm md:text-md">{`${
          comments.length + localComments.length
        } نظر`}</span>

        {isMobile && (
          <Icon className="mr-auto">
            <Arrow />
          </Icon>
        )}
      </div>
      {(showComments || !isMobile) && (
        <>
          <div className="md:h-[600px] max-h-[600px] overflow-y-scroll">
            {[...comments, ...localComments].map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="flex gap-2 mt-2 text-gray-light px-4 md:px-6"
                >
                  <img src={avatar} className="w-[35px] h-[35px] mt-2" />
                  <div>
                    <div className="text-md flex items-center">
                      {comment.creator.name}
                      <span className="text-gray text-[12px] mr-1">
                        {moment(comment.createdAt).fromNow()}
                      </span>
                    </div>
                    <div className="mt-2">{comment.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 flex items-end gap-2">
            <img src={avatar} className="w-[35px] h-[35px]" />
            <textarea
              className="focus:outline-none placeholder:text-gray-light bg-primary-dark grow mb-1 pt-7 disabled:cursor-wait"
              type="text"
              value={text}
              rows={1}
              disabled={sendComment.isLoading}
              placeholder="نظر خود را بنویسید"
              onChange={(e) => setText(e.target.value)}
            />
            <Icon className="mb-[6px]" onClick={sendComment.mutate}>
              <Send />
            </Icon>
          </div>
        </>
      )}
    </div>
  );
}

Comments.propTypes = {
  comments: pt.array,
};

export default Comments;
