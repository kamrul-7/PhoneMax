import React from 'react';
import useTitle from '../../hooks/title/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='text-start m-10'>

            <div className='bg-black text-white font-xl p-8 shadow-lg hover:shadow-2xl rounded-md'>
                <h1 className='font-bold text-xl mb-5 '>1. What are the different ways to manage a state in a React application?</h1>
                <p>In React apps, there are at least seven ways to handle the state.
                    <strong>URL</strong>
                    The id of the current item, being viewed
                    Filter parameters
                    Pagination offset and limit
                    Sorting data
                    <strong>Web Storage </strong> The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.   <strong>Local State </strong> The third option is to use store state locally. It is useful when one component needs the state.<strong> Lifted State</strong> The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. <strong>Derived State</strong> The fifth option is to compute the new state based on the available state and we do not need to declare a state at all.
                </p>
            </div>
            <div className='bg-black text-white font-xl p-8 shadow-lg hover:shadow-2xl mt-7 rounded-md'>
                <h1 className=' font-bold text-xl mt-5 mb-6'>2 How does prototypical inheritance work?</h1>
                <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.In JavaScript, all objects have a hidden Prototype property that’s either another object or null.
                    We can use obj.__proto__ to access it a historical getter/setter, there are other ways, to be covered soon.
                    The object referenced by Prototype is called a “prototype”.
                    If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
                    Write/delete operations act directly on the object, they don’t use the prototype assuming it’s a data property, not a setter.
                    If we call obj.method, and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
                    The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

                    Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                    Authentication is used by a client when the client needs to know that the server is system it claims to be.
                    In authentication, the user or computer has to prove its identity to the server or client.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity such as a bank that the client expects it to.
                    Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.</p>
            </div>

            <div className='bg-black text-white font-xl p-8 shadow-lg hover:shadow-2xl mt-8 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>3.What is a unit test? Why should we write unit tests?</h1>
                <p> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. <br /> <br />
                    To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                    Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                    It simplifies the debugging process.
                    Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                    Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                    Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                    In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </p>
            </div>

            <div className='bg-black text-white font-xl p-8 shadow-lg hover:shadow-2xl mt-8 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>4. React vs. Angular vs. Vue?</h1>
                <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready. React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p>
                <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p> <p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
            </div>
        </div>
    );
};

export default Blog;