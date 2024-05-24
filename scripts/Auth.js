function requestAuth(payload = {}, isRevalidate = false) {
   $.ajax({
      url: USER_AUTH,
      type: 'POST',
      data: JSON.stringify(payload),
      dataType: 'json',
      contentType: 'application/json',
      success: function (response) {
         if (isRevalidate) {
         } else {
            const data = {
               cr711_tokenid: response.cr711_tokenid,
               contactID: response._cr711_contact_value,
            };
            setItemStore('loginAccess', data);
         }
      },
      error: function () {},
   });
}

function appDetails() {
   return JSON.stringify({
      languages: window.navigator.languages,
      appVersion: window.navigator.appVersion,
      platform: window.navigator.platform,
      userAgent: window.navigator.userAgent,
   });
}

function checkIfUserLogin() {
   const data = getUserTokenDetails();
   const payload = {
      username: '',
      password: '',
      navigatorApp: '',
      hashToken: data.cr711_tokenid,
      isLogin: false,
   };

   console.log(payload);
   requestAuth(payload, true);
}

function loginUser(username = '', password = '') {
   const payload = {
      username: username,
      password: password,
      hashToken: generateToken(),
      navigatorApp: appDetails(),
      isLogin: true,
   };
   console.log(payload);
   requestAuth(payload, false);
}
