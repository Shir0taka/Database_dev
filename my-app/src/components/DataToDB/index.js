import React, { useState } from 'react';

const DataToDB = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка данных на сервер
      const response = await fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      // Обработка ответа
      if (response.ok) {
        console.log('Данные успешно отправлены на сервер.');
        // Можно также обновить состояние вашего React-компонента, если необходимо
      } else {
        console.error('Ошибка при отправке данных на сервер.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default YourForm;
