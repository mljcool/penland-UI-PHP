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
         console.log('Request 7 completed: ');
      } catch (error) {
         console.error('Error occurred:', error);
      }
   };

   const stepsThreeSavePaymentDetails = () => {
      asyncTask(1, 'sample').then(() => {
         stepFourSaveWorkShopItem();
         afterEachCallStoploadingBySection('payments');
         smoothSrollToNextBlock('workshops');
         console.log('Request 6 completed: ');
      });
   };

   const saveMemberList = async () => {
      const data = membersPayload();
      console.log('payload 5:', data);
      try {
         for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            await fetchPostRequest(data[i], ADD_HOUSING_MEMBERS);
         }
         stepsThreeSavePaymentDetails();
         afterEachCallStoploadingBySection('housing');
         smoothSrollToNextBlock('payments');

         console.log('Request 5 completed: ');
      } catch (error) {
         console.error('Error occurred:', error);
      }
   };

   const stepsTwoAddHousing = () => {
      const payload = housingPayload();
      console.log('payload 4:', payload);
      $.ajax({
         ...requestOptions(ADD_HOUSING, payload),
         success: function (data) {
            console.log('Request 4 completed: ');
            setItemStore('housingAPIResult', data);
            saveMemberList();
         },
         error: function () {},
      });
   };

   const registerApplication = () => {
      const payload = applicationPayload();
      console.log('payload 3:', payload);
      $.ajax({
         ...requestOptions(REGISTER_APPLICATION, payload),
         success: function (data) {
            console.log('Request 3 completed: ');
            setItemStore("applicationData", data);
            stepsTwoAddHousing();
         },
         error: function () {},
      });
   };

   const stepOneRegisterAccount = () => {
      const payload = personalInfoPayload();
      console.log('payload 2:', payload);
      $.ajax({
         ...requestOptions(REGISTER_ACCOUNT, payload),
         success: function (data) {
            console.log('Request 2 completed: ');
            setItemStore("dynamicsAPIResult", data);
            registerApplication();
            afterEachCallStoploadingBySection('personal');
            smoothSrollToNextBlock('housing');
           
         },
         error: function () {},
      });
   };

   const checkAsIs = () => {
      asyncTask(1, 'sample').then(() => {
        afterEachCallStoploadingBySection('account');
        console.log('Request 1 completed: ');
        smoothSrollToNextBlock('personal');
         stepOneRegisterAccount();
      });
   };
   checkAsIs();
  //  stepsTwoAddHousing()
}
