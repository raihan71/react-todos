import axios from 'axios';

const todoService = axios.create({
  baseURL: process.env.REACT_APP_HOST || 'https://react-todos-be.vercel.app/'
});

export const getTodos = async () => {
  const resp = await todoService.get("/todos");
  return resp.data;
};

export const addTodo = async (item) => {
  return await todoService.post("/todos", item);
};

export const updateTodo = async (item) => {
  return await todoService.patch(`/todos/${item.id}`, item);
};

export const deleteTodo = async ({ id }) => {
  return await todoService.delete(`/todos/${id}`, id);
};


export default todoService;