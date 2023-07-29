import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const listUsers = async (query: string) => {
  const { data } = await apiClient.get(`/users?query=${query}`);
  return data;
}

const importCSV = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await apiClient.post('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return data;
}

export const apiServices = {
  listUsers,
  importCSV,
}
