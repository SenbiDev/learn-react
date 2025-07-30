import React, { useState } from 'react';

const CrudArrayStr = () => {
  const [items, setItems] = useState([
    'Item 1: Belajar React',
    'Item 2: Membuat CRUD',
    'Item 3: Menggunakan Tailwind'
  ]);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleAdd = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (editIndex === index) {
      cancelEdit();
    }
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const saveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedItems = [...items];
      updatedItems[editIndex] = editValue;
      setItems(updatedItems);
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditValue('');
  };

  return (
    <div className="fixed top-0 h-dvh mt-20" style={{ width: "-webkit-fill-available" }}>
      <div className="w-full text-black p-4">
        <h2 className="text-xl font-bold mb-6">CRUD Array String</h2>
        
        {/* Form Tambah Item */}
        <div className="mb-6">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Tambah item baru"
            className="w-full px-3 py-2 border-1 border-black rounded-md mb-2 text-black placeholder-gray-600"
          />
          <button
            onClick={handleAdd}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md transition text-white"
          >
            Tambah
          </button>
        </div>
        
        {/* Daftar Item */}
        <div className="overflow-y-auto max-h-[calc(100vh-180px)]">
          <h3 className="font-medium mb-2">Daftar Item:</h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li 
                key={index} 
                className={`flex justify-between items-center p-2 rounded-md hover:text-white ${
                  editIndex === index ? 'bg-blue-900' : 'hover:bg-blue-700'
                }`}
              >
                {editIndex === index ? (
                  <div className="flex-1">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full px-2 py-1 bg-white rounded text-black"
                      autoFocus
                    />
                  </div>
                ) : (
                  <span className="flex-1 truncate">{item}</span>
                )}
                
                <div className="flex space-x-1 ml-2">
                  {editIndex === index ? (
                    <>
                      <button 
                        onClick={saveEdit}
                        className="p-1 text-green-500 hover:text-green-400"
                        title="Simpan"
                      >
                        ✓
                      </button>
                      <button 
                        onClick={cancelEdit}
                        className="p-1 text-gray-400 hover:text-white"
                        title="Batal"
                      >
                        ✕
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => startEdit(index)}
                        className="p-1 text-blue-400 hover:text-blue-300"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => handleDelete(index)}
                        className="p-1 text-red-500 hover:text-red-400"
                        title="Hapus"
                      >
                        🗑️
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CrudArrayStr;