import { useState } from 'react';

function MyButton({ count, onClick }) {

  return (
    <button
      className="rounded-full bg-blue-400 text-white text-[14px] p-2 hover:bg-blue-500"
      onClick={onClick}
    >
      Diklik {count} kali
    </button>
  );
}

export default function Learn9() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Berbagi data antar komponen</h1>
      <MyButton count={count} onClick={handleClick} />
      <div className="my-6" />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
