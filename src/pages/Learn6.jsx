const products = [
  { title: 'Kubis', isFruit: false, id: 1 },
  { title: 'Bawang Putih', isFruit: false, id: 2 },
  { title: 'Apel', isFruit: true, id: 3 },
];

export default function Learn6() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Me-render daftar</h1>
      <ul>{listItems}</ul>
    </div>
  );
}