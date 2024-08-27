import axios from 'axios';
import { API_BASE_URL } from '../../config';

export const submitGuess = async (guess: number) => {
  const response = await axios.post(`${API_BASE_URL}/guess`, { guess });
  return response.data;
};

export const restartGame = async () => {
  await axios.post(`${API_BASE_URL}/start-game`);
};
