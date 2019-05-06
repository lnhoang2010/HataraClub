# Getting Started
## Install [CocoaPods ](https://cocoapods.org/)
https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#3-install-cocoapods in doc react native 
CocoaPods is a package management tool for iOS and macOS development. We use it to add the actual React Native framework code locally into your current project.
* We recommend installing CocoaPods using [Homebrew](https://brew.sh/):
##
    brew install cocoapods
## Install Package and In Project ( Hataraclub_app):
### 1. Install package
    yarn install / npm install 
### 2. If using macOS development then install the React Native [pod](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#configuring-cocoapods-dependencies) (in directory Hataraclub_app/ios)

    cd ios
    pod install

## Config [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) and Communicate via local server [remotedev-server](https://github.com/zalmoxisus/remotedev-server)
### Getting Started[doccument](https://docs.google.com/document/d/1yPkiPSpdSVykywXbkYufWj7fnGOrOruoNgSwclNZd5s/edit)
### Config in projetc (in directory Hataraclub_app/node_modules)
    var remotedev = require('remotedev-server');
    remotedev({ hostname: 'localhost', port: 8000 });


# Bug libs:
* fix bug react-native-reanimated : https://github.com/kmagiera/react-native-reanimated/pull/254/files/fc31046fd9500c86e66058924cef639bc3b637de