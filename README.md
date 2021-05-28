# CryptoMon

## Description

I use CoinGecko's API to fetch cryptocurrency data to this app. The user can then search the coins and add them to their favorite list. The favorite list is stored in google's firebase. A lot of work needs to be done still. Part of the code is buggy and doesn't run the way it should. But the UI look, is very close to the model that I have chosen.

## The functionalities to be implemented

- Visualizing data in different charts is the first thing on my list.
- User can create portfolios and add different coins to those.
- Maybe adding the total value of the portfolio the each screen.
- Notification for price changes would be great things too.

Other functionalities could be using camera to take pictures of users exchange keys so that the app can make signed API calls and fetch users transactions.

## Technologies used

The app is at its very beginning stage and needs a lot of improvements on the parts that are already added. So far I use

- API from [[here](https://www.coingecko.com/en/api#explore-api)]
- ReactNavigation
- Firebase

## How to deploy

Clone this repo and then install it with npm or yarn. That's all for the installation. 
To be able to save the favorites, you need a Firebase credetials. 

Create a "firebaseConfig" file in the component directory and add your firebase credentials to it.

Hopefully then you can run the app. I will work on this and make it solid. Currently there are issues with screen not updating immidietly. 
