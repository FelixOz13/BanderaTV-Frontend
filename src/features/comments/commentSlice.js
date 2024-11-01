// Import necessary functions from redux-toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'

const initialState = {
  comments: [], // Always initialized as an empty array
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new comment
export const createComment = createAsyncThunk(
  'comments/create',
  async (commentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.createComment(commentData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user comments
export const getComments = createAsyncThunk(
  'comments/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.getComments(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user comment
export const deleteComment = createAsyncThunk(
  'comments/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log('Deleting comment with ID:', id);
      const response = await commentService.deleteComment(id, token);
      console.log('Delete response:', response);
      return response;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      console.error('Error deleting comment:', message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// Update user comment
export const updateComment = createAsyncThunk(
  'comments/update',
  async ({ id, text }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log('Updating comment with ID:', id);
      console.log('New comment text:', text);
      const response = await commentService.updateComment(id, { text }, token);
      console.log('Update response:', response);
      return response;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      console.error('Error updating comment:', message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments.push(action.payload) // Assuming action.payload is the new comment
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getComments.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments = action.payload // Assuming action.payload is an array of comments
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        console.log('Delete comment fulfilled:', action.payload); // Confirm payload structure
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload.id // Ensure this matches the response format
        );
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // Handle update comment cases
      .addCase(updateComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments = state.comments.map((comment) =>
          comment._id === action.payload._id ? action.payload : comment
        )
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = commentSlice.actions
export default commentSlice.reducer
