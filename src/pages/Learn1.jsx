function MyButton() {
  return (
    <button className="rounded-full bg-blue-400 text-white text-[14px] p-2 hover:bg-blue-500">
      Saya adalah tombol
    </button>
  );
}

export default function Learn1() {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Membuat dan menyarangkan (nest) komponen-komponen</h1>
      <MyButton />
    </div>
  );
}
