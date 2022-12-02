import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10 text-center'>
            <h2 className='mb-8 underline text-xl lg:text-3xl'>Here are some important questions and their answers</h2>
            <div className='mx-4 lg:mx-20 '>
                <div className='my-5  p-5 border border-1'>
                    <h3 className='text-sm lg:text-2xl'><span className='font-bold'>Ques No. 1:</span> What are the different ways to manage a state in a React application?</h3>
                    <p className='text-xs lg:text-xl mt-4'><span className='font-bold'>Ans:</span> React State management is one of the most critical aspects of an online web or mobile application.The growth of interactive application development has, in turn, triggered an unprecedented rise in the number of React state management libraries. Selecting the correct state management library for your React app wins you half the battle.There are many libraries like Redux, MobX / MobX-State-TreeXState, Recoil, Zustand etc.</p>
                </div>
            </div>
            <div className='mx-4 lg:mx-20 '>
                <div className='my-5  p-5 border border-1'>
                    <h3 className='text-sm lg:text-2xl'><span className='font-bold'>Ques No. 2:</span> How does prototypical inheritance work?</h3>
                    <p className='text-xs lg:text-xl mt-4'><span className='font-bold'>Ans: </span>In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object, in the prototype of the prototype, and so on until a property is found that matches the name or the end of the prototype chain is reached.</p>
                </div>
            </div>
            <div className='mx-4 lg:mx-20 '>
                <div className='my-5  p-5 border border-1'>
                    <h3 className='text-sm lg:text-2xl'><span className='font-bold'>Ques No. 3:</span> What is a unit test? Why should we write unit tests?</h3>
                    <p className='text-xs lg:text-xl mt-4'><span className='font-bold'>Ans: </span>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
                </div>
            </div>
            <div className='mx-4 lg:mx-20 '>
                <div className='my-5  p-5 border border-1'>
                    <h3 className='text-sm lg:text-2xl'><span className='font-bold'>Ques No. 4:</span> React vs. Angular vs. Vue?</h3>
                    <p className='text-xs lg:text-xl mt-4'><span className='font-bold'>Ans: </span> Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM. React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts.With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component.Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;