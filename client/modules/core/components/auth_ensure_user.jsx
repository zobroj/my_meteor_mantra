import React from 'react';

const DefaultGuestMessage = (
  <div>Please log in to view this content.</div>
);

const DefaultLoadingMessage = (
  <div>Loading...</div>
);

const DefaultUnverifidMessage = (
  <div>This functionality is not available to unverified users.</div>
);

const AuthEnsureUser = ({
    loggingIn, loggedIn, emailVerified, children, guestMessage, loadingMessage, unverifiedMessage,
  }) => {
  let guestComponent = guestMessage || DefaultGuestMessage;
  let unverifiedComponent = unverifiedMessage || DefaultUnverifidMessage;
  let loadingComponent = loadingMessage || DefaultLoadingMessage;

  if (loggingIn) {
    return (
      <div>{loadingComponent}</div>
    );
  }

  if (loggedIn && emailVerified) {
    return (
      <div>{children}</div>
    );
  } else if (loggedIn && !emailVerified) {
    return (
      <div>{unverifiedComponent}</div>
    );
  }

  return (
    <div>{guestComponent}</div>
  );
};

export default AuthEnsureUser;
