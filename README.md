# Chapter-1
We have revised how to create element using javascript
Then we have learnt how to use/import react in our app
For now we have used cdn(content delivery network) to use react
created element using React.createElement()

# Chapter-2
In this chapter we learnt about bundler - parcel
we have initilized npm to our projects to install dependencies
After initilizing npm it creates package.json in our app
It keeps the records of all the dependencies which we have installed
used command npm i -D parcel to install bundler-parcel in our projects
After installing any package it create another file package-lock.json and one folder node_modules
In package-lock.json keeps the records of exact version of dependency which we have installed
Also keeps the records of dependency which are required to the dependency which we have installed
This type of dependencies are called Transitive Dependency.
In node_modules all the code/data related to our packages get stored 
Also stored the code/data of transitive dependencies
As node_module becomes heavy file so we should not put it on git hub
For this we create file .gitignore and put it into in this file
To use react in our project cdn is not good way. 
Better option is using command npm i react and npm i react-dom.
To run our project we use command npx parcel index.html
Difference between npx and npm is that npx is used to execute installed package and
npm is used to install package