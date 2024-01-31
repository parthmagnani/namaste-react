
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

# Chapter-5
1. In this chapter we have structured our app as initially al the the components were in App.js

2. But now we have created src folder > components folder > where all the componenets will be there 

3. There is no such hard flow to structure our app but there are two practices which are used in industry

4. First is either you structure your app module wise like components related to registration will be in registration folder and components related to feeds will be Feeds folder and so on

5. Second is keep the same file in same folder like all the components will be in components folder, all the common things will be in common folder and so on

6. There are two types of export and import, default and named

7. when we have export default something from file/component we use default export but if we have to export multiple variables.function from single file mostly we use name export

8. In part two we have learnt about Hooks. In this mainly we have learnt about useState Hook

9. useState Hook is use to maintain the state of the component. It is used to create state varianble

10. Also we have learnt about reconciliation algorith(React Fible) which is used by React for rendering

11. In this there is a virtual DOM (objectal representation of an actual DOM) so when data gets updated new virtual DOM is created now with the help of Differential algorithm it finds out what are new changes and accordingly updated the actual DOM

# chapter-6
1. we have learnt about Monolithic and Microservices Architecture

2. In a monolithic architecture, the entire application is developed as a single unit. All the components of the application, including the user interface, business logic, and data access layers, are tightly integrated and deployed as a single unit.

3. Microservices architecture is an approach to software development where an application is composed of loosely coupled, independently deployable services. Each service is responsible for a specific business function and communicates with other services through well-defined APIs.

4. There are two ways to loads apis or to render component

5. First we load then we call api and at last we render our page and second is first we load , then we render, then we call api and at last we rerender our component. So best practise is second approach as in first case our UI will stock untill we don't get reponse from backend/api

5. We learnt about one more important hook, useEffect()

6. It executes at the end, it means after the rendering of the jsx it will get execute. Mostly used to call APIs.

# chapter-7
1. In this chapter we have learnt more about useEffect Hook

2. This hook take two parameters, callBack function and dependency array

3. This hook called after every component render cycle i.e, Whenever component gets render this useEffect will get execute.

4. But if in second parameter we pass an empty array it will only get execute on initial rendering

5. Also, if we pass something, mostly state variable, in dependency array so it will execute everytime when the value of that state variable gets change   

6. In part part 2 we have learnt about routing. For routing we are using library react-router-dom

7. first we create configuration for routing with the help of createBrowserRouter

8. After creating configuration we will provide this configuration to root.render with the help of RouterProvider

9. we can also show error page if route is not defined by providing errorElement in routing configuration.

10. As children route is also define by just using key children in parent object and it is also list of object containing path and element.

11. Dynamic routing is done by /:id, so after (:) will be dynamic

12. To get this is in component we can take use of useParams hook 

# chapter-8
1. In this chapter we learnt about how we create class base component. Just like how we create class, like that only we can create class base component. UserClass is an example of class base component

2. To use props which have been pass to class base component it can be used using constructor and using super like done in UserClass component. 

3. we can also create state varible in class component by this.sate and this will be objects and its key will be variable name and its value will be the initial value of that variable.

4. To update state varible react provide one method setState

5. Whenever class base component gets mounted its instance is created, so initially constructor get called and then render methods gets called and at last, after out component gets render one more method is called which is componentDidMount(), it is just like useEffect().  