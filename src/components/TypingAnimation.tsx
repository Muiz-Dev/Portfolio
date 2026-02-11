'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypingAnimation({ 
  texts, 
  typingSpeed = 120, 
  deletingSpeed = 80, 
  pauseDuration = 2000, 
  className 
}: TypingAnimationProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const handleTyping = useCallback(() => {
    const currentIndex = loopNum % texts.length;
    const fullText = texts[currentIndex];

    if (isDeleting) {
      setText(current => current.substring(0, current.length - 1));
    } else {
      setText(current => fullText.substring(0, current.length + 1));
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(currentLoop => currentLoop + 1);
    }
  }, [loopNum, isDeleting, text, texts, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink text-primary">|</span>
    </span>
  );
}
