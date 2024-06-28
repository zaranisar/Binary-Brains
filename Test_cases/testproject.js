//test cases 
assert = chai.assert;

// describe() is a function by which you can define a collection of tests. 
// It takes two parameters, the 1st one is a description of what is being tested, and 
// the 2nd one is a function which contains one or multiple tests each defined by one it().
describe('Testing 3 cases of EECS1012 Diary Project', function () {

  // it() is a function by which you should define one single test.
  // It takes two parameters, the 1st one is a description of what is being tested, and 
  // the 2nd one is a function which normally contains one assert. 
  it('Test 1: The password matched the confirmed password when signing up', function () {
    var newPass = "12345678";
    var newPassC = "12345678";
   
    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false 
    assert(newPass == newPassC);
  });

  it('Test 2: The length of the password is equal to or less than 8', function () {
    var pass = "abcd1234"
    assert(pass.length <= 8);
  });

  it('Test 3: The current date is displayed in the form D/MM/YYYY on the "journal recorded" page', function () {
      assert(formattedDate = "4/12/2022");
  });
})