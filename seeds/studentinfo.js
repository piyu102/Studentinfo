
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('studentinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('studentinfo').insert([
        { id: 1, name: 'Piyush Agrawal', rollNumber: '60', age: '20', email: 'test123@gmail.com', mobileNumber: '9876543212', collegename: 'SGSITS', course: 'BE', branch: 'Computer Science', sem: '6' },
        { id: 2, name: 'Samiksha Agrawal', rollNumber: '78', age: '21', email: 'test1234@gmail.com', mobileNumber: '1234567899', collegename: 'SGSITS', course: 'BE', branch: 'Information Technology', sem: '6' },
        { id: 3, name: 'Prasang Jain', rollNumber: '40', age: '22', email: 'test12@gmail.com', mobileNumber: '9898765432', collegename: 'SGSITS', course: 'BE', branch: 'Electronics', sem: '6' },
        { id: 4, name: 'Yashraj Pandey', rollNumber: '89', age: '21', email: 'test@gmail.com', mobileNumber: '7676898765', collegename: 'SGSITS', course: 'BE', branch: 'Information Technology', sem: '6' },
        { id: 5, name: 'Shubhi Vyas', rollNumber: '83', age: '21', email: 'test56@gmail.com', mobileNumber: '8769876543', collegename: 'SGSITS', course: 'BE', branch: 'Computer Science', sem: '6' }
      ])


    });
};
