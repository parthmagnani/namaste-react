
# Chapter-1
1. We have revised how to create element using javascript

2. Then we have learnt how to use/import react in our app

3. For now we have used cdn(content delivery network) to use react
created element using React.createElement()

# Chapter-2
1. In this chapter we learnt about bundler - parcel

2. we have initilized npm to our projects to install dependencies

3. After initilizing npm it creates package.json in our app

4. It keeps the records of all the dependencies which we have installed

5. used command npm i -D parcel to install bundler-parcel in our projects

6. After installing any package it create another file package-lock.json and one folder node_modules

7. In package-lock.json keeps the records of exact version of dependency which we have installed

8. Also keeps the records of dependency which are required to the dependency which we have installed

9. This type of dependencies are called Transitive Dependency.

10. In node_modules all the code/data related to our packages get stored 

11. Also stored the code/data of transitive dependencies

12. As node_module becomes heavy file so we should not put it on git hub

13. For this we create file .gitignore and put it into in this file
To use react in our project cdn is not good way. 

14. Better option is using command npm i react and npm i react-dom.

15. To run our project we use command npx parcel index.html

16. Difference between npx and npm is that npx is used to execute installed package and npm is used to install package

# Chapter-3
1. To run project we use command npx parcel index.html

2. But instead of writing this long command again and again, in package.json we write script for it.

3. we have learnt how to create jsx element and it is just also react element

4. we learnt how to create function component, they are just like function

5. TO render component we write <component/>  

6. we can also use component inside component this is called component composition

7. we can also use element inside component and vice versa
