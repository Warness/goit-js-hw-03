const findBestEmployee = employees => {
    'use strict';
    // Write code under this line
    let completeTasks = 0;
    let bestEmployee = ''
    for (const key in employees) {
        if (employees[key] > completeTasks ) {
            completeTasks = employees[key]
            bestEmployee = key;
        }
    }
    
    return bestEmployee;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  