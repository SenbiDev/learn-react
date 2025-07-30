import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <button
      className="rounded-full bg-blue-400 text-white text-[14px] p-2 hover:bg-blue-500"
      onClick={handleClick}
    >
      Diklik {count} kali
    </button>
  );
}

export default function Learn8() {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Memperbarui Layar</h1>
      <MyButton />
      <div className="my-6" />
      <MyButton />
    </div>
  );
}
