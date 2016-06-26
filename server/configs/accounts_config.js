// server configs
export default function () {

  // call this to add non-standard Account fields
  Accounts.onCreateUser( function ( options, user ) {
    console.log( "server onCreateUser called" )
    console.log( "user.username: " + user.username )
    // check for unique username?
    return user
  })

}
