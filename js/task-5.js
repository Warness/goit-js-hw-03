function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line 
    let propertyValues = []
    for (const object of array) {
        const newArray = Object.entries(object)

        for (const array of newArray) {
            if (prop === array[0]){
                propertyValues.push(array[1])
            }
        }
        // for (const key in object) {

        //     if (key === prop) {
        //         propertyValues.push(object[key])               
        //     }
        // }
    }
    for (const {name,price,quantity} of array) {
    console.log(name);
    }

    return propertyValues
  }
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
  console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity'));
//   // [4, 2, 1, 1, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category'));
//   //  []
  