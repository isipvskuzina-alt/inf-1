<script src="Inf.html"></script>

let numbers = [1, 6, -7, 12, 4, 5, 0]
let data = [10, "hello", true]

console.log(numbers[5])
numbers.push("hello")//добавляет в конец массива эл-т
numbers.pop()//удаляет последний эл-т

let part = numbers.slice(1, 3)


// Исходные данные
const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

// Задание 1. Фильтрация пользователей
function getActiveUsers(users) {
  return users.filter(user => user.isActive);
}

// Задание 2. Получение имён пользователей
const getUserNames = (users) => {
  return users.map(user => user.name);
};

// Задание 3. Поиск пользователя
function findUserById(users, id) {
  const user = users.find(user => user.id === id);
  return user || null;
}

// Задание 4. Подсчёт статистики
function getUsersStatistics(users) {
  const active = users.filter(user => user.isActive).length;
  const inactive = users.filter(user => !user.isActive).length;

  return {
    total: users.length,
    active,
    inactive
  };
}

// Задание 5. Средний возраст
function getAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

// Задание 6. Дополнительный функционал программы
function groupUsersByCity(users) {
  return users.reduce((result, user) => {
    const city = user.city;

    if (!result[city]) {
      result[city] = [];
    }

    result[city].push(user);
    return result;
  }, {});
}

// Примеры использования:
console.log(getActiveUsers(users));
console.log(getUserNames(users));
console.log(findUserById(users, 2));
console.log(getUsersStatistics(users));
console.log(getAverageAge(users));
console.log(groupUsersByCity(users));
