const getName = () => {
  return "Mr Abdullah Al Mamun";
};
const getAge = () => {
  return "25";
};
const myVillage = "Gazupur";
//send these function into index file.
// exports.getName = getName ;
// exports.getAge = getAge;
// exports.myVillage = myVillage
// Export the Age
// ! This system is bad to do for every time, we also can do with module export

module.exports = {
  getAge,
  getName,
  myVillage,
  //export all into a single object
};
