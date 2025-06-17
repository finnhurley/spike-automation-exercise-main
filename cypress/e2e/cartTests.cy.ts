import { HomePage } from '../support/Pages/homepage';
import { CartPage} from '../support/Pages/cartPage';
import { ProductsPage } from '../support/Pages/productsPage';
import { ViewCartPage } from '../support/Pages/viewCartPage';
import { faker } from '@faker-js/faker';
import { SignupPage } from '../support/Pages/signupPage';
import { LoginPage } from '../support/Pages/loginPage';

describe('Shopping Cart Test Cases 14 and 15', () => {

  //page objects
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const productsPage = new ProductsPage();
  const viewCartPage = new ViewCartPage();
  const loginPage = new LoginPage();
  const signUpPage = new SignupPage();


  //fake user data, gets reset before every test:
  var firstName: string;
  var lastName: string;
  var email: string;
  var address: string;
  var state: string;
  var city: string;
  var zipcode: string;
  var mobileNumber: string;
  var password: string;


  beforeEach(() => {
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    email = faker.internet.email({firstName}); 
    address = faker.location.streetAddress();
    state = faker.location.state();
    city = faker.location.city();
    zipcode = faker.location.zipCode();
    mobileNumber = faker.phone.number();
    password = faker.internet.password();
    
    //I opted to put the visit in the beforeEach as I would expect this to be
    // the starting point of every test if this was a bigger suite    
    homePage.visit();
  })

  it('should Place Order: Register while Checkout', () => {
    //3. Verify that home page is visible successfully
    homePage.getIcon();

    //4. Add products to cart
    //5. Click 'Cart' button
    homePage.clickCartButton();

    //6. Verify that cart page is displayed
    cartPage.cartPageEmptyMessage();
    cartPage.clickHereLink();

    productsPage.addFirstItemToCart();
    productsPage.clickModalViewCart();

    //7. Click Proceed To Checkout
    viewCartPage.clickProceedToCheckout();

    //8. Click 'Register / Login' button 
    viewCartPage.clickModalRegisterLogin();

    //9. Fill all details in Signup and create account
    loginPage.typeSignupNameField(firstName);
    loginPage.typeSignUpEmailField(email);
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

    //10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    signUpPage.verifyAccountCreated();
    signUpPage.clickContinueButton();

    //11. Verify ' Logged in as username' at top
    homePage.checkIfLoggedIn();

    //12.Click 'Cart' button
    homePage.clickCartButton();

    //13. Click 'Proceed To Checkout' button
    cartPage.clickProceedToCheckout();

    //14. Verify Address Details and Review Your Order
    //15. Enter description in comment text area and click 'Place Order'
    //16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    //17. Click 'Pay and Confirm Order' button
    //18. Verify success message 'Your order has been placed successfully!'
    //19. Click 'Delete Account' button
    //20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  })

  it('should Place Order: Register before Checkout', () => {
    //3. Verify that home page is visible successfully
    homePage.getIcon();

    //4. Click 'Signup / Login' button 
    homePage.clickSignUpLoginButton();

    //5. Fill all details in Signup and create account
    loginPage.typeSignupNameField(firstName);
    loginPage.typeSignUpEmailField(email);
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

    //6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    signUpPage.verifyAccountCreated();
    signUpPage.clickContinueButton();

    //7. Verify ' Logged in as username' at top
    homePage.checkIfLoggedIn();

    //8. Add products to cart
    productsPage.addFirstItemToCart();

    //9. Click 'Cart' button
    productsPage.clickModalViewCart(); //clicking from the modal due to time constraints

    //10. Verify that cart page is displayed

    //11. Click Proceed To Checkout
    cartPage.clickProceedToCheckout();

    //12. Verify Address Details and Review Your Order
    //13. Enter description in comment text area and click 'Place Order'
    //14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    //15. Click 'Pay and Confirm Order' button
    //16. Verify success message 'Your order has been placed successfully!'
    //17. Click 'Delete Account' button
    //18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  })
})