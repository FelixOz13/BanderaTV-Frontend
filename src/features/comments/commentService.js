import axios from 'axios'

const API_URL = 'http://localhost:5000/api/comments/'

// Create new goal
const createComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, commentData, config)

  return response.data
}


const getComments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}



const updateComment = async (commentId, commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    console.log('Attempting to update comment with ID:', commentId);
    console.log('Update data:', commentData);
    const response = await axios.put(API_URL + commentId, commentData, config);
    console.log('Update response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
}



const deleteComment = async (commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    console.log('Attempting to delete comment with ID:', commentId);
    const response = await axios.delete(API_URL + commentId, config);
    console.log('Delete response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
}


const commentService = {
  createComment,
  getComments,
  deleteComment,
  updateComment
}

export default commentService