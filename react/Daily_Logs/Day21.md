# Day 61 - 1 May 2025

## 🚀 Journey Progress
- ✅ Started the **Assembly Endgame** course.
- ✅ Learned about `clsx` – a utility for conditionally joining classNames.
- ✅ Got deeper understanding of **React** concepts through hands-on practice.

## 📘 Key Learnings
- `clsx` is helpful for cleaner conditional class handling in JSX:
  ```js
  import clsx from 'clsx';

  const Button = ({ isActive }) => (
    <button className={clsx('btn', { 'btn-active': isActive })}>
      Click Me
    </button>
  );
