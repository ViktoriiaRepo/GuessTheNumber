import { useState, ChangeEvent, FormEvent } from 'react';

import './App.css';
import Form from './components/Form';
import Result from './components/Result';
import Button from './components/Button';
import Confetti from 'react-confetti';
import { restartGame, submitGuess } from './api';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateInput = (value: string): string | null => {
    const number = parseInt(value, 10);
    if (isNaN(number)) return 'Введіть число, будь ласка';
    if (number < 1 || number > 100)
      return 'Введіть число в діапазоні від 1 до 100';
    return null;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setError(validateInput(value)); 
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (error) return; 

    try {
      const data = await submitGuess(parseInt(inputValue, 10));

      if (data.result === 'correct') {
        setResult('Число вгадано!');
        setGameOver(true);
        setIsWinner(true);
      } else if (data.result === 'higher') {
        setResult('Загадане число більше');
      } else if (data.result === 'lower') {
        setResult('Загадане число менше');
      }

      setInputValue('');
    } catch (error) {
      setResult('Сталася помилка');
      console.error('Error during guess request:', error);
    }
  };

  const handleRestart = async () => {
    try {
      await restartGame();
      setInputValue('');
      setResult('');
      setGameOver(false);
      setIsWinner(false);
    } catch (error) {
      setResult('Сталася помилка');
      console.error('Error during restart request:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-2 bg-gray-100 fade-in'>
      <h1 className='text-2xl font-bold mb-4'>Вгадай число від 1 до 100</h1>
      <Form
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        disabled={gameOver}
        error={error}
      />
      <Result result={result} />
      {gameOver && (
        <Button onClick={handleRestart} className='mt-4 rounded-lg'>
          Розпочати
        </Button>
      )}
      {isWinner && <Confetti />}
    </div>
  );
}

export default App;
