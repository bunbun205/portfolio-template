'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Comment } from '../../../utils/interfaces';
import { FaHeart, FaFlag } from 'react-icons/fa';

const fallbackComments: Comment[] = [
  {
    id: '1',
    user_id: 'guest1',
    post_id: 'fallback',
    content: 'Great read! Learned a lot.',
    parent_id: null,
    likes: 3,
    flags: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    user_id: 'guest2',
    post_id: 'fallback',
    content: 'Can you explain the second part more?',
    parent_id: null,
    likes: 1,
    flags: 0,
    created_at: new Date().toISOString(),
  },
];

const FallbackComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('comments-fallback');
    if (saved) {
      setComments([...fallbackComments, ...JSON.parse(saved)]);
    } else {
      setComments(fallbackComments);
    }
  }, []);

  const saveToLocal = (updated: Comment[]) => {
    const userAdded = updated.filter((c) => !fallbackComments.find((f) => f.id === c.id));
    localStorage.setItem('comments-fallback', JSON.stringify(userAdded));
  };

  const addComment = () => {
    if (!newComment.trim()) return;
    const newEntry: Comment = {
      id: uuidv4(),
      user_id: 'localUser',
      post_id: 'fallback',
      content: newComment.trim(),
      parent_id: null,
      likes: 0,
      flags: 0,
      created_at: new Date().toISOString(),
    };
    const updated = [newEntry, ...comments];
    setComments(updated);
    saveToLocal(updated);
    setNewComment('');
  };

  const addReply = (parentId: string, text: string) => {
    const newReply: Comment = {
      id: uuidv4(),
      user_id: 'localUser',
      post_id: 'fallback',
      content: text.trim(),
      parent_id: parentId,
      likes: 0,
      flags: 0,
      created_at: new Date().toISOString(),
    };
    const updated = [newReply, ...comments];
    setComments(updated);
    saveToLocal(updated);
  };

const handleLike = (id: string) => {
  const updated = comments.map((c) => {
    if (c.id === id) {
      const likedKey = `liked-${id}`;
      const alreadyLiked = localStorage.getItem(likedKey) === 'true';

      if (alreadyLiked) {
        localStorage.setItem(likedKey, 'false');
        return { ...c, likes: c.likes - 1 };
      } else {
        localStorage.setItem(likedKey, 'true');
        return { ...c, likes: c.likes + 1 };
      }
    }
    return c;
  });
  setComments(updated);
  saveToLocal(updated);
};

const handleFlag = (id: string) => {
  const updated = comments.map((c) => {
    if (c.id === id) {
      const flaggedKey = `flagged-${id}`;
      const alreadyFlagged = localStorage.getItem(flaggedKey) === 'true';

      if (alreadyFlagged) {
        localStorage.setItem(flaggedKey, 'false');
        return { ...c, flags: c.flags - 1 };
      } else {
        localStorage.setItem(flaggedKey, 'true');
        return { ...c, flags: c.flags + 1 };
      }
    }
    return c;
  });
  setComments(updated);
  saveToLocal(updated);
};


  const renderReplies = (parentId: string) =>
    comments
      .filter((c) => c.parent_id === parentId)
      .map((reply) => (
        <div key={reply.id} className="ml-6 mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
          <div className="text-sm text-gray-700 dark:text-gray-300">{reply.content}</div>
          <div className="flex gap-3 text-xs mt-1">
            <button onClick={() => handleLike(reply.id)} className="flex items-center gap-1 text-red-500">
              <FaHeart /> {reply.likes}
            </button>
            <button onClick={() => handleFlag(reply.id)} className="flex items-center gap-1 text-yellow-600">
              <FaFlag /> {reply.flags}
            </button>
          </div>
        </div>
      ));

  const CommentBox = ({ comment }: { comment: Comment }) => {
    const [showReply, setShowReply] = useState(false);
    const [replyText, setReplyText] = useState('');

    return (
      <div className="border-t pt-4 mt-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">{comment.content}</div>
        <div className="flex gap-3 text-xs mt-1">
          <button onClick={() => handleLike(comment.id)} className="flex items-center gap-1 text-red-500">
            <FaHeart /> {comment.likes}
          </button>
          <button onClick={() => handleFlag(comment.id)} className="flex items-center gap-1 text-yellow-600">
            <FaFlag /> {comment.flags}
          </button>
          <button onClick={() => setShowReply((prev) => !prev)} className="text-blue-500">Reply</button>
        </div>
        {showReply && (
          <div className="mt-2 flex gap-2">
            <input
              className="flex-1 p-1 border rounded text-sm"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button
              onClick={() => {
                if (replyText.trim()) {
                  addReply(comment.id, replyText);
                  setReplyText('');
                  setShowReply(false);
                }
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Send
            </button>
          </div>
        )}
        {renderReplies(comment.id)}
      </div>
    );
  };

  return (
    <section className="mt-10">
      <h3 className="text-lg font-bold mb-2">Comments</h3>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Leave a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={addComment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Post
        </button>
      </div>

      {comments
        .filter((c) => c.parent_id === null)
        .map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
    </section>
  );
};

export default FallbackComments;
