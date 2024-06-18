const WORKSHOP_LIST = `https://prod-84.westus.logic.azure.com:443/workflows/ec7689b3bda84c1a85d31970900a8b74/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JAK1lRIHTUKZRE42MxeWjFcgoXgm-OR3HeWTX0SCQUc`;

var REGISTER_ACCOUNT = `https://prod-44.westus.logic.azure.com:443/workflows/7a121b6f6eab490ab8a51584106bd7ad/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NeZyr9S2SId0HbBDd6FNDtDoTzLpvr8K-29TT3Ex16E`;

var REGISTER_APPLICATION = `https://prod-39.westus.logic.azure.com:443/workflows/25d21f112f5a402e82086e997977363b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zPV3stzt5kg57QTrjvuNtf9yQ6lYRI5me_oCMq-IZzc`;

var CHECK_USER = `https://prod-86.westus.logic.azure.com:443/workflows/99d70f81c6134beeae3eb2c60418b8a6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-Mjh2zBdVjzcPCv9UAN_m7hzMlFRtyBiEUK5hALmY1g`;

var ADD_HOUSING = `https://prod-35.westus.logic.azure.com:443/workflows/8dde227cbf36455a93449ef6785b520d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=s0GvH5A_XhcIIV71HGZ3xe3zcoclZadd4sdyqTH1Ilo`;

var ADD_HOUSING_MEMBERS = `https://prod-126.westus.logic.azure.com:443/workflows/67c0f7c4bd44485ca9522a9c503ac932/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AjXD8UjsThzJ80__T4Zn-8lMiXMk6Kf-yclddJOXgkQ`;

var ADD_WORSHOPS = `https://prod-191.westus.logic.azure.com:443/workflows/28ceb353f1884ab4b08f28fed0f3890e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Fi0p0clGyrU2dwjuw90j0cmTY_FOArmqVrhTTFyh_xU`;

var USER_AUTH = `https://prod-21.westus.logic.azure.com:443/workflows/4deedea3af624450a2d848da6064c1f2/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=PgbJ61xawpd1cK6m5peToiIMmk3s-_X8Ae01YPK_xUw`;

var STUDIOS_URL = `https://prod-142.westus.logic.azure.com:443/workflows/89872968770c4fa7a87a5f776aa2a9cc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=livmkqQDzpRufCvwO6KPawprIEC_HzK9nEuzlW1vfQ4`;

var SESSION_URL = `https://prod-104.westus.logic.azure.com:443/workflows/11b00fe01f9d4a8ab485dd861b610d5e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZtTU7Wq0hGItDGpDo5Lfx_PGQoNtfbRMQ30UWbVG3e0`;

var GET_PRODUCTS = `https://prod-15.westus.logic.azure.com:443/workflows/697051f36741407c8caafb3eff9128ed/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uN-be0vybIf6Z7T6fWhyp7JWyBJpRhqeNZWHvosbXN4`;

var REGISTRATION = `https://prod-129.westus.logic.azure.com:443/workflows/85a10d559c424dfeadadde34b9a89c2f/triggers/manual/paths/invoke?api-version=2016-06-01`;

var SALES_ORDER = `https://prod-142.westus.logic.azure.com:443/workflows/430163216bb54dd9bee534a9a4c99cae/triggers/manual/paths/invoke?api-version=2016-06-01`;

var GET_Detailed_Workshop_Session = `https://prod-107.westus.logic.azure.com:443/workflows/0bf0e4632ab441cfbee1799c25538e6a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sa-gxcVurjjNMl1mxnAnp6UnCufrJT9gnQHrJFVoeTU`;

var Registration_Enrollment_Portal = `https://prod-129.westus.logic.azure.com:443/workflows/85a10d559c424dfeadadde34b9a89c2f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BJo0PzkhSKjmCbuAvrkRQNkQ4ZOKHAHO7cfLpbJ0n3w`;

var Registration_Create_Sales_Order_Portal = `https://prod-142.westus.logic.azure.com:443/workflows/430163216bb54dd9bee534a9a4c99cae/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=D4PSOYhIcf8sHTCTU7aP25DtWfdtcip6oazg6pPwaQY`;

var Registration_Add_Products_to_Sales_Order = `https://prod-98.westus.logic.azure.com:443/workflows/a2ec9fae8ca9491b9f70fc6116c9e829/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=PY_WoXNsCCGe30YTIj0gwd8P4uowGRL4gpIKut2_kQI`;

var GET_Workshop_Images = `https://prod-159.westus.logic.azure.com:443/workflows/dbac0728b4c040088b390edf9139187d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DXt8e5JkYzd_SERAsT3Tq-xSDSzUkszc6dKMk4PBatE`;

var Join_to_waitlist_Create_Contact = `https://prod-106.westus.logic.azure.com:443/workflows/c5aba1e262fb4aafba98e4363fb17d09/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=woM7Az3_W57fCYZK57sUk86i27KUMTF5vNk4bcttCMU`;

var Join_to_waitlist_Create_Enrollment = `https://prod-47.westus.logic.azure.com:443/workflows/a84c7189adc2437ebb36a04417929d69/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ug9k5rQx-SVynAbis4IndfKzFBN_20i_Wjbb3axO2Lk`;

var Destroy_User_Credentials_Token = `https://prod-75.westus.logic.azure.com:443/workflows/41753931e4124b14ba13bdf0939b124d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=obFfD-FTfb5dkXdK4u7oievOm-GUJ1KeXARizoKqtKI`;

var Get_User_Invoices = `https://prod-25.westus.logic.azure.com:443/workflows/9ab8b338b1bc45eb883024845a7ce1c3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rXginQwXSfUGuM1BnieNRnKzE8KU1ZMKDp2J1XiSm2I`;

var Get_User_Workshops_Enrollment = `https://prod-53.westus.logic.azure.com:443/workflows/141b992e797e4dcf93cd16dd5836dc61/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tm-_dB225NpKrqaszFVz-wXMsg6qUXsHSfGl9ssWx_4`;

var Get_Sales_Order_And_Products_Workshop_Details = `https://prod-107.westus.logic.azure.com:443/workflows/a904ccf0a55547128478c3c63202e0c7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tm96Jy6DO-vlc7y1Gr4it-KVhgE-dSwieB3Rp82H5T8`;

var Get_Instructor_and_Studio_Details = `https://prod-191.westus.logic.azure.com:443/workflows/68602021ae8e4c718457ceed60b47eab/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YNDuuC0P2wLs-_eZ9DbUdhy0eyxGz9QdpQ8YAKa7-qs`;

var Upload_User_Photo = `https://prod-13.westus.logic.azure.com:443/workflows/d5012066d800464995388c6d78047ecc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=X5IhGvIiawf0bA9-4dnwaq1eIQVHb1DOJBHMtN3wnaY`;


var Get_User_Avatar = `https://prod-171.westus.logic.azure.com:443/workflows/143c5f9971bd451b92c7f443091806f8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BXx38Mheb1DicOJzKXPUXNiaP58DcaV1I4KOet-n_Vo`;

var Weather_Report = `https://prod-61.westus.logic.azure.com:443/workflows/28a8830f973846808b5d8a5429bae402/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=k1UlXF3Nszc2hGyJjtqz25pZX3bQI249SHOnVChWKZE`;


var Update_User_Profile = `https://prod-154.westus.logic.azure.com:443/workflows/a6f5fa767aa443f997f198cfb704f004/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0qk5nUI9130fI1u-XZmFkgG5IKXm4cjh05zCofe5x0s`;


var Update_User_Password = `https://prod-46.westus.logic.azure.com:443/workflows/1b72a4cd77ff40c1a489822f74b4eaa2/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8fXcNUlc5k_lQwM7hHiiJVqFIRhSFzc93QeFPvQHQfQ`;

var User_Send_Password_Reset_Link  =`https://prod-30.westus.logic.azure.com:443/workflows/9584d720f59b4cb0b755ead1032ddb9f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1fC9swZdLm8boLa4lGXk6Hjz6xCS609IPfzsqUwNiNY`