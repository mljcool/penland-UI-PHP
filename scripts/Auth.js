function requestAuth(payload = {}) {
   $.ajax({
      url: USER_AUTH,
      type: 'POST',
      data: JSON.stringify(payload),
      dataType: 'json',
      contentType: 'application/json',
      success: function (response) {
         if (payload.isLogin) {
            const data = {
               cr711_tokenid: response.cr711_tokenid,
               contactID: response._cr711_contact_value,
            };
            setItemStore('loginAccess', data);
            redirectToDashboard();
         } else {
            ifLoginRedirect(response);
         }
      },
      complete: function () {
         $('#authenticate-card').unblock();

         if (!payload.isLogin) {
            $('html').unblock();
         }
      },
      error: function () {
         htmlEL('id_message-warning').css('display', 'block');
      },
   });
}

function destroySession() {
   wrappEntireHTML();
   const data = getLoginDetails();
   console.log('destroySession', data[0]['cr711_securitylogintokenid']);
   const payload = {
      cr711_tokenid: data[0]['cr711_securitylogintokenid'],
   };
   $.ajax({
      url: Destroy_User_Credentials_Token,
      type: 'POST',
      data: JSON.stringify(payload),
      dataType: 'json',
      contentType: 'application/json',
      success: function (response) {
         console.log('response', response);
         localStorage.clear();
         if (response === 1) {
            location.reload();
         }
      },
      complete: function () {
         $('html').unblock();
      },
      error: function () {},
   });
}

function ifLoginRedirect(response) {
   if (response.length) {
      const lookIfIsloginPage = getPATHNameURL().some((_data) =>
         checkWordExists(_data)
      );
      setItemStore('loginDetails', response);

      if (lookIfIsloginPage) {
         redirectToDashboard();
      }
   }
}

function ifDashBoardRedirect() {
   const lookIsDashboard = getPATHNameURL().some((_data) =>
      checkWordExists(_data, 'dashboard-panel')
   );
   redirectToLogin(lookIsDashboard);
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
   if (data) {
      const payload = {
         username: '',
         password: '',
         navigatorApp: '',
         hashToken: data.cr711_tokenid,
         isLogin: false,
      };

      requestAuth(payload);
      return;
   }
   $('html').unblock();
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
   requestAuth(payload);
}

$(document).ready(function () {
   wrappEntireHTML();
   ifDashBoardRedirect();
   checkIfUserLogin();
   shapeMyProfile();
   $('.login-user').click(function () {
      loadingEffect();
      const emailOrPassowrd = $('#email').val();
      const password = $('#password').val();
      loginUser(emailOrPassowrd, password);
   });

   $('#user-logout').click(function () {
      destroySession();
   });
});
