# Face Off

An unofficial Web App for quick access to NHL Schedules, stats, and more.

Developed with React.js. Powered by data provided by MySportsFeeds API.

## Getting Started

    git clone https://github.com/samuel-obrien25/face-off
Or, check out the latest build live:
	https://samuel-obrien25.github.io/face-off/

## TO-DO List

### DO NOW

 - Figure out User Flows and Information Architecture
 - Sketch out UI and Component Designs
	 - Game Cards
	 - Schedule Cards
	 - Header/Various Header States
		 - App home
		 - Team List
		 - Selected Team's Schedule
	 - Buttons
		 - Fab
		 - Home/Schedule Buttons
 - Write tests for everything
 
### DO SOON
 - ~~Reorganize components/file structure so it actually makes sense~~ **(DONE)**
 - ~~Rewrite all components that can be written as Stateless Functional Components~~ **(DONE)**
 - Research best practices for writing CSS in React and reorganize CSS
	 - Make sure all classes are consistently formatted
- ~~Convert JSON date to JS Date~~ **(DONE)**
-	~~Use that information to auto scroll to next upcoming game~~ **(DONE)**
- ~~Style Header component based on selected Team~~ **(DONE)**
- ~~Add Team's Record to card components~~ **(DONE)**
- Put time/effort into making UI improvements

### DO LATER

 - Add Offline functionality (**Minor Feature**)
 - Add Favorite Team functionality (**Minor Feature**)
 - Add Teams Section (**Major Feature**)
	 - Sort Teams by
		 - Standings
			 - League Standings
			 - Division Standings
			 - Conference Standings
		 - Statistics
			 - Goals For
			 - Goals Against
			 - Powerplay goals
			 - etc. etc. etc.
 - Add Players Section (**Major Feature**)
	 - Sort players by
		 - Points
		 - Goals
		 - Assists
		 - etc. etc. etc.
### DO WAY LATER
 - Choose individual Teams to compare (**Major Feature**)
 - Choose individual Players to compare (**Major Feature**)
 - Research React Native and see if it's worth a try for a native mobile app?

### DO MAYBE
- ~~Fab button for next game instead of auto scroll?~~ **(DONE)**
	 
## Thanks!
BIG thanks to MySportsFeeds for providing an incredible (and incredibly easy to use) API for free, for non-commercial applications.
