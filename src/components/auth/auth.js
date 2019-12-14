class Auth {

  isAuthenticated() {
    fetch('https://moneybin.herokuapp.com/authorized', {
        method: 'GET',
        headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
        mode: 'cors',
        credentials: "include",
        cache: 'default',
    })
    .then(response => {
      if (response.status == 200) {
        return true
      }
    })
    return false
  }
}


export default new Auth();
