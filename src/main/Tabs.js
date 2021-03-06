import { Navigation } from "react-native-navigation"
import Icon from "react-native-vector-icons/FontAwesome5"

import { customColors as colors } from "../assets/colors"

export const startTabs = () => {
  Promise.all([
    Icon.getImageSource("user", 20),
    Icon.getImageSource("flag", 20),
    Icon.getImageSource("chart-line", 20),
    Icon.getImageSource("search", 20),
    Icon.getImageSource("camera", 20),
    Icon.getImageSource("user-md", 30, colors.orange),
    Icon.getImageSource("ellipsis-v", 30, colors.orange)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Activity",
          screen: "Activity",
          icon: sources[2],
          navigatorStyle: {
            statusBarHidden: true,
            navBarBackgroundColor: colors.dark
          },
          navigatorButtons: {
            leftButtons: [
              {
                title: "Profile",
                id: "profile",
                icon: sources[5],
                buttonFontSize: 30,
                disableIconTint: true // should be added to change icon color
              }
            ],
            rightButtons: [
              {
                id: "menu",
                icon: sources[6],
                disableIconTint: true
              }
            ]
          }
        },
        {
          label: "Search",
          screen: "Search",
          title: "Search",
          icon: sources[3],
          navigatorStyle: {
            statusBarHidden: true,
            navBarHidden: true
          },
          navigatorButtons: {}
        },
        {
          label: "Notification",
          screen: "Notification",
          icon: sources[1],
          title: "Notification",
          navigatorStyle: {
            statusBarHidden: true,
            navBarHidden: true
          },
          navigatorButtons: {}
        },
        {
          label: "Profile",
          screen: "Profile",
          title: "Profile",
          icon: sources[0],
          navigatorStyle: {
            statusBarHidden: true,
            navBarHidden: true
          },
          navigatorButtons: {}
        }
      ],
      tabsStyle: {
        tabBarButtonColor: colors.green, // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
        tabBarLabelColor: colors.green,
        tabBarSelectedButtonColor: colors.orange, // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
        tabBarSelectedLabelColor: colors.orange,
        tabBarBackgroundColor: "#00364A", // optional, change the background color of the tab bar
        initialTabIndex: 0,
        tabBarTranslucent: true,
        forceTitlesDisplay: false,
        tabBarHideShadow: true
      },
      appStyle: {
        orientation: "auto"
      },
      drawer: {
        // optional, add this if you want a side menu drawer in your app
        left: {
          // optional, define if you want a drawer from the left
          screen: "LeftScreen", // unique ID registered with Navigation.registerScreen
          passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
          fixedWidth: 200 // a fixed width you want your left drawer to have (optional)
        },
        right: {
          // optional, define if you want a drawer from the right
          screen: "RightScreen", // unique ID registered with Navigation.registerScreen
          passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
          fixedWidth: 200 // a fixed width you want your right drawer to have (optional)
        },
        style: {
          // ( iOS only )
          drawerShadow: true, // optional, add this if you want a side menu drawer shadow
          contentOverlayColor: "rgba(0,0,0,0.25)", // optional, add this if you want a overlay color when drawer is open
          leftDrawerWidth: 80, // optional, add this if you want a define left drawer width (50=percent)
          rightDrawerWidth: 80, // optional, add this if you want a define right drawer width (50=percent)
          shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
        },
        type: "MMDrawer", // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
        animationType: "slide", //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
        disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: "slide-down"
    })
  })
}
// tabsStyle: {
//   tabBarHidden: false, // make the tab bar hidden
//   tabBarButtonColor: '#ffff00', // change the color of the tab icons and text (also unselected)
//   tabBarSelectedButtonColor: '#ff9900', // change the color of the selected tab icon and text (only selected)
//   tabBarBackgroundColor: '#551A8B', // change the background color of the tab bar
//   tabBarTranslucent: false, // change the translucent of the tab bar to false
//   tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family
//   tabBarLabelColor: '#ffb700', // iOS only. change the color of tab text
//   tabBarSelectedLabelColor: 'red', // iOS only. change the color of the selected tab text
//   forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
//   tabBarHideShadow: true // Remove default tab bar top shadow (hairline)
// }
