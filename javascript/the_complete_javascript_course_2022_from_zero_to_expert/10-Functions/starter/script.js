'use strict';

const bookings = [];

//Default parameters...
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  /* const booking = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  }; */
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
