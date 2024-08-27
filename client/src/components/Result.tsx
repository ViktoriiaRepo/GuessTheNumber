import React, { useEffect, useState } from 'react';

interface ResultProps {
  result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('fade-in');
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 500);

    return () => clearTimeout(timer);
  }, [result]);

  return (
    <p className={`text-lg font-medium mt-2 text-gray-700 ${animationClass}`}>
      {result}
    </p>
  );
};

export default Result;
