function startRegistrationProcess() {
   const stepFourSaveWorkShopItem = async () => {
      const data = workShopItemsPayload();
      try {
         for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            await fetchPostRequest(data[i], ADD_WORSHOPS);
            afterEachCallStoploadingBySection('workshops');
            finalMessageSuccess();
         }
         console.log('All API calls finished.');
      } catch (error) {
         console.error('Error occurred:', error);
      }
   };

   const stepsThreeSavePaymentDetails = () => {
      asyncTask(1, 'sample').then(() => {
         stepFourSaveWorkShopItem();
         afterEachCallStoploadingBySection('payments');
         smoothSrollToNextBlock('workshops');
      });
   };

   const saveMemberList = async () => {
      const data = membersPayload();
      try {
         for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            await fetchPostRequest(data[i], ADD_HOUSING_MEMBERS);
         }
         stepsThreeSavePaymentDetails();
         afterEachCallStoploadingBySection('housing');
         smoothSrollToNextBlock('payments');

         console.log('All API calls finished.');
      } catch (error) {
         console.error('Error occurred:', error);
      }
   };

   const stepsTwoAddHousing = () => {
      const payload = housingPayload();
      $.ajax({
         ...requestOptions(ADD_HOUSING, payload),
         success: function (data) {
            console.log('Request 2 completed: ');
            saveMemberList();
         },
         error: function () {},
      });
   };

   const registerApplication = () => {
      const payload = applicationPayload();
      $.ajax({
         ...requestOptions(REGISTER_APPLICATION, payload),
         success: function (data) {
            console.log('Request 1 completed: ');
            stepsTwoAddHousing();
         },
         error: function () {},
      });
   };

   const stepOneRegisterAccount = () => {
      const payload = personalInfoPayload();
      $.ajax({
         ...requestOptions(REGISTER_ACCOUNT, payload),
         success: function (data) {
            console.log('Request 1 completed: ');
            afterEachCallStoploadingBySection('personal');
            smoothSrollToNextBlock('housing');
            stepsTwoAddHousing();
         },
         error: function () {},
      });
   };

   const checkAsIs = () => {
      asyncTask(1, 'sample').then(() => {
        afterEachCallStoploadingBySection('account');
        smoothSrollToNextBlock('personal');
         stepOneRegisterAccount();
      });
   };
   checkAsIs();
}
