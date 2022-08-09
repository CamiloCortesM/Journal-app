export const initialState = {
  status: "checking", // "checking" 'not-athenticated','authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated", // "checking" 'not-athenticated','authenticated'
  uid: 'abc123',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-athenticated", // "checking" 'not-athenticated','authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
    uid:'ABC123',
    email:'demo@google.com',
    displayName:'Demo User',
    photoURL:'https://foto.jpg'
}
