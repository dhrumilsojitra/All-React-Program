import React, { useEffect, useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState(() => {
    const savedComments = localStorage.getItem("Comments");
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    setCommentArr([...commentArr, comment]);
    setComment("");
  };

  useEffect(() => {
    localStorage.setItem("Comments", JSON.stringify(commentArr));
  }, [commentArr]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-4 border rounded-lg shadow-md w-full max-w-lg bg-white">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Comments</h2>

        {/* Comment Input Section */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="https://placehold.co/40"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-2"
            type="submit"
          >
            Post
          </button>
        </form>

        {/* Comment List */}
        <div className="mt-4 space-y-3">
          {commentArr.map((cmt, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="https://placehold.co/40"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg w-full">
                <p className="text-sm font-semibold">User {index + 1}</p>
                <p className="text-gray-700">{cmt}</p>
                <div className="text-xs text-gray-500 mt-1">Just now</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
