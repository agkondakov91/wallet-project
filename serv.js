function saveDataByMonth(month, data) {
    // Получаем текущие данные из localStorage
    const existingData = JSON.parse(localStorage.getItem('monthlyData')) || {};
  
    // Добавляем или обновляем данные для указанного месяца
    existingData[month] = data;
  
    // Сохраняем обновленные данные в localStorage
    localStorage.setItem('monthlyData', JSON.stringify(existingData));
  }
  
  function getDataByMonth(month) {
    // Получаем текущие данные из localStorage
    const existingData = JSON.parse(localStorage.getItem('monthlyData')) || {};
  
    // Получаем данные для указанного месяца
    return existingData[month] || null;
  }
  
  // Пример использования
  const septemberData = { totalSumm: 123000 };
  const octoberData = { totalSumm: 5000 };
  const decemberData = { totalSumm: 9125 };
  
  saveDataByMonth('September', septemberData);
  saveDataByMonth('October', octoberData);
  saveDataByMonth('December', decemberData);

  function getMonthNamesFromLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem('monthlyData')) || {};
    return Object.keys(existingData);
  }
  
  // Пример использования
  const monthNames = getMonthNamesFromLocalStorage();
  console.log(monthNames);

  const sliderItems = document.querySelectorAll('.slider_item');

  // Заполняем placeholder-ы названиями месяцев
  monthNames.forEach((month, index) => {
    if (index < sliderItems.length) {
      sliderItems[index].textContent = month;
    }
  });