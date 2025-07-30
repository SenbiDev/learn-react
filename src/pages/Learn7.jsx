function MyButton() {
  const handleClick = () => {
    alert('Anda mengeklik saya!');
  }

  return (
    <button
      className="rounded-full bg-blue-400 text-white text-[14px] p-2 hover:bg-blue-500"
      onClick={handleClick}
    >
      Klik saya
    </button>
  );
}

export default function Learn7() {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Merespon ke event</h1>
      <MyButton />
    </div>
  );
}
