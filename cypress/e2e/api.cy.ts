import { HomePage } from '../support/Pages/homepage';
import { SignupPage } from '../support/Pages/signupPage';
import { LoginPage } from '../support/Pages/loginPage';
import { faker } from '@faker-js/faker';


describe('API Test Suite', () => {
  const baseUrl = "https://automationexercise.com/api/"

  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signUpPage = new SignupPage();

  //fake user data, gets reset before every test:
  var firstName: string;
  var lastName: string;
  var emailAddress: string;
  var address: string;
  var state: string;
  var city: string;
  var zipcode: string;
  var mobileNumber: string;
  var password: string;

  beforeEach(() => {
    //reset the fake user before every test
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    emailAddress = faker.internet.email({firstName}); 
    address = faker.location.streetAddress();
    state = faker.location.state();
    city = faker.location.city();
    zipcode = faker.location.zipCode();
    mobileNumber = faker.phone.number();
    password = faker.internet.password();
  })

  it('API 7: POST To Verify Login with valid details', () => {
    //create a user for testing:
    homePage.visit();
    homePage.clickSignUpLoginButton();
    loginPage.typeSignupNameField(firstName);
    loginPage.typeSignUpEmailField(emailAddress);
    loginPage.clickSignUpButton();
    signUpPage.enterPasswordField(password);
    signUpPage.enterFirstNameField(firstName);
    signUpPage.enterLastNameField(lastName);
    signUpPage.enterAddressField(address);
    signUpPage.enterStateField(state);
    signUpPage.enterCityField(city);
    signUpPage.enterZipcodeField(zipcode);
    signUpPage.enterMobileField(mobileNumber);
    signUpPage.clickCreateAccountButton();

    //api endpoint that calls are being made to
    const endpoint = baseUrl + "verifyLogin";

    cy.request({
      method: 'POST',
      url: endpoint,
      form: true,
      body: {
        email: emailAddress,
        password: password
      }
    }).then((response) => {
      expect(response.body).to.contain('User exists!');
    });
  })

  it('API 8: POST To Verify Login without email parameter' , () => {
    //api endpoint that calls are being made to
    const endpoint = baseUrl + "verifyLogin";
    cy.request({
      method: 'POST',
      url: endpoint,
      form: true,
      body: {
        password: password
      }
    }).then((response) => {
      expect(response.body).to.contain('Bad request, email or password parameter is missing in POST request.');
    });
  })

  it('API 9: DELETE To Verify Login' , () => {
    //api endpoint that calls are being made to
    const endpoint = baseUrl + "verifyLogin";
    cy.request({
      method: 'DELETE',
      url: endpoint,
      form: true,
    }).then((response) => {
      expect(response.body).to.contain('This request method is not supported.');
    });
  })

  it('API 10: POST To Verify Login with invalid details' , () => {
    //api endpoint that calls are being made to
    const endpoint = baseUrl + "verifyLogin";
    cy.request({
      method: 'POST',
      url: endpoint,
      form: true,
      body: {
        email: emailAddress,
        password: password
      }
    }).then((response) => {
      expect(response.body).to.contain('User not found!');
    });
  })
})