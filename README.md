To install:

1. run `yarn`
2. `cd /ios && pod install && cd ..`
3. (Optional: create firebase iOS + Android Apps)
4. Download config files from Firebase and replace contents in `/android/app/google-services.json`, and `/ios/GoogleService-Info.plist` (More info on [Android](https://rnfirebase.io/#2-android-setup), and [iOS](https://rnfirebase.io/#2-android-setup))
5. `yarn ios` or `npm run ios` to start iOS.
6. `yarn android` or `npm run android` to start Android.

![Login](/examples/login.png?raw=true "Login")
![Home](/examples/home.png?raw=true "Home")
