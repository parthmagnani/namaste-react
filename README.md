
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

# Chapter-4
1. In this chapter we have plan out our food deliver app or we have created skeleton for this.

2. we built our thinking process how should our app will look like

3. we decided which components will be required to built our app and structured accordingly

3. There will be main AppLayout component

4. Inside which there will be Header, Body and Footer componet

5. Revision - component is just javascript function which return jsx

6. For now in body component there will be seach functionality and list os Top restaurants

7. So there will be container for list of restaurant and for showcase of restaurant individually there will be card

8. Here card will be separate component which will be RestaurantCardComponet

9. There will be the details of restaturant in it

10. In part 2 we have learnt about props(properties), how we can pass props into functional component

11. we are passing argument in function, like that only we will be passing props to functional component   

12. props are mainly used to make our component dynamic

13. we also learnt what is config driven UI, It is part of system design
config driven UI means our UI will be based on what data we have or what data getting from backend on that base we will show our UI

14. while looping an array into jsx we use key keyword in which there will be unique ID

15. This key keyword is used because when react rerender the component it will just re render the particular array element which is new or we can say that in which element it find new unique ID, by this our app is optimized  
