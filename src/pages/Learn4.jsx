const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Learn4() {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Menampilkan data</h1>
      <p className="text-3xl font-bold mb-4">{user.name}</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageSize
        }}
      />
    </div>
  );
}