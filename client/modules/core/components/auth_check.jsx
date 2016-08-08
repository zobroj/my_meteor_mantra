import React from 'react';

const AuthCheck = ({ loggedIn, emailVerified, children, guestMessage, unverifiedMessage }) => {
  let guestComponent = guestMessage || DefaultGuestMessage;
  let unverifiedComponent = unverifiedMessage || DefaultUnverifidMessage;
  if (loggedIn && emailVerified) {
    return (
      <div>
        {children}
      </div>
    );
  } else if (loggedIn && !emailVerified) {
    return (
      <div>
        {unverifiedComponent}
      </div>
    );
  }
  return (
    <div>
      {guestComponent}
    </div>
  );
};

const DefaultGuestMessage = (
  <div>
    Please log in to view this content.
  </div>
);

const DefaultUnverifidMessage = (
  <div>
    This functionality is not available to unverified users.
  </div>
);

export default AuthCheck;
