import { Router } from 'express';

const router = Router();

let secretNumber: number | null;

router.post('/start-game', (req, res) => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ message: 'The game begins!' });
});

router.post('/guess', (req, res) => {
  const guess = Number(req.body.guess);

  if (!secretNumber) {
    return res.status(400).json({ message: "The game hasn't started yet!" });
  }

  if (guess === secretNumber) {
    return res.json({ result: 'correct', secretNumber });
  } else if (guess < secretNumber) {
    return res.json({ result: 'higher' });
  } else if (guess > secretNumber) {
    return res.json({ result: 'lower' });
  }
});

export default router;
