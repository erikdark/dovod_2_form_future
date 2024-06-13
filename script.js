document.addEventListener('DOMContentLoaded', function() {
  const presentForm = document.getElementById('presentForm');
  const futureForm = document.getElementById('futureForm');

  const loginPresent = document.getElementById('loginPresent');
  const passwordPresent = document.getElementById('passwordPresent');
  const databasePresent = document.getElementById('databasePresent');
  const hostPresent = document.getElementById('hostPresent');

  const hostFuture = document.getElementById('hostFuture');
  const databaseFuture = document.getElementById('databaseFuture');
  const passwordFuture = document.getElementById('passwordFuture');
  const loginFuture = document.getElementById('loginFuture');

  // Function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  // Update future form when present form is filled
  presentForm.addEventListener('input', function() {
    hostFuture.value = reverseString(hostPresent.value);
    databaseFuture.value = reverseString(databasePresent.value);
    passwordFuture.value = reverseString(passwordPresent.value);
    loginFuture.value = reverseString(loginPresent.value);
  });

  // Update present form when future form is filled
  futureForm.addEventListener('input', function() {
    hostPresent.value = reverseString(hostFuture.value);
    databasePresent.value = reverseString(databaseFuture.value);
    passwordPresent.value = reverseString(passwordFuture.value);
    loginPresent.value = reverseString(loginFuture.value);
  });

  presentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const login = loginPresent.value;
    const password = passwordPresent.value;
    const database = databasePresent.value;
    const host = hostPresent.value;

    if (login === 'admin123' && password === 'password123' && database === 'bd_dovod' && host === 'localhost') {
      alert('ПОДСКАЗКА В ФИЛЬМЕ ДОВОД');
    } else {
      alert('Неверные данные');
    }
  });

  futureForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const login = loginFuture.value;
    const password = passwordFuture.value;
    const database = databaseFuture.value;
    const host = hostFuture.value;

    if (login === '321nimda' && password === '321drowssap' && database === 'dovod_db' && host === 'tsohlacol') {
      alert('Вы прошли игру');
    } else {
      alert('Неверные данные');
    }
  });
});
