// let autos = ['BMW X6', 'Mercedes GLK', 'Chevrolet Malibu'];
// // print(autos[0]);
// // print(autos[1]);
// // print(autos[2]);
// // print(autos[3]);

// autos[3] = 'Ford Mustang';
// autos.push('Ferrari Laferrari')

// // for (let i = 0; i < autos.length; i++) {
// //     print(autos[i]);
// // }

//print(autos.length);
// autos.sort();

// autos .forEach( el => print(el)
// );
// //lambda

function print(data) {
     document.write(data + '<br>');
}
////////////////// dictionary

// let garage = {};
// garage['white'] = 'BMW X6';
// garage['red'] = 'Ferrari Laferrari';
// garage['black'] = 'Chevrolet Malibu';

// print(garage['grey']);

// for(let key in garage){
//     print(garage[key]);
// }

///////////////////object
// let ferrariLaferrari = {};
// ferrariLaferrari.name = 'Laferrari';
// ferrariLaferrari.make = 'Ferrari';
// ferrariLaferrari.year = '2015';

// ferrariLaferrari.run = function () {
//     print('this.name is runing');
//     // body...
// }
//  ferrariLaferrari.run();

/////// cnstructor function
// function Car(name, make, year){
//     this.name = name;
//     this.make = make;
//     this.year = year;
// }
//////////////////// zamykanny

function count(){
   let counter = 0;
    counter++;
    return function() {
        
        return ++counter;
    };
}
let counter = count();
 
 count();
 count();
 count();


////////////////////classes
// class SuperCar {
//     constructor(name, make, year) {
//         this.name = name;
//         this.make = make;
//         this.year = year;
//     }
//     run() {
//         print(this.name + ' is running');
//     }
// }

// let bugattiVeyron = new SuperCar('Veyron', 'Bugatti', 2014);
// bugattiVeyron.run();