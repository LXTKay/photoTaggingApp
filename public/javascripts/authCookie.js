function getAuthCookie() {
  const cookies = document.cookie.split(";");
  const authCookie = cookies.find(function(cookie){
    if(cookie.includes("Authorization")){
      return cookie.split("=")[0]
    };
  });
  return authCookie;
};

function putAuthCookie(token) {
  document.cookie = `Authorization=Bearer ${token}; Path=/; SameSite=Strict; Expires=${new Date(Date.now() + 1000 *60 * 60 * 2)};`;
};

export {getAuthCookie, putAuthCookie};