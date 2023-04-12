import { surpriseMePrompts } from '../constants';

export function getRAndomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRAndomPrompt(prompt);

  return randomPrompt;
};