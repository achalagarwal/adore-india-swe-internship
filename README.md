# Adore Internship Test

Hi and welcome to the Adore internship takeaway test. Before we begin, let's familiarize ourselves with the technologies that we will be using in the test.

### Technologies Used

1. [Google AMP](https://developers.google.com/amp) - State-of-the-art component library for building performant web pages

2. [Next JS](https://nextjs.org/)- Leading web-application development framework

Additionally it would be nice to have familiarity with `yarn`, `nodejs`, `react`. Although we won't be using them directly in the test.

You can find articles on connecting AMP with Next JS [here](https://nextjs.org/docs/advanced-features/amp-support/introduction)!

---

## Setting up

Follow the following steps

1. Clone this repo on your local machine. Read the [how to](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) if you aren't sure.
2. Make sure `yarn` is installed. You can find the installation guide at [Yarn's webpage](https://classic.yarnpkg.com/lang/en/docs/install/).
3. Execute the following command in the directory
   ```bash 
   # make sure to `cd <project-directory>` before running the command
   yarn install
   ```
4. Next, start the dev server
   ```bash 
   # in the same project-directory
   yarn dev
   ```
5. Navigate to `localhost:3000` on your preferred web browser and see the page in action

--- 

## The Test

Coming back to the test, there are two possible challenges for you to choose from.
Please only focus on one of them.

1. Optimise Javascript, this also involves digging deeper into integrating AMP in the context of NextJS
2. Optimise HTML/CSS, this involves understanding CSS selectors, media queries, and basic HTML.

The optimisation here is to reduce the lines of code. So in the context of javascript, it would mean reducing the 4 js files in the `/public` directory; Whereas in the context of HTML/CSS, it would mean reducing the size of `/pages/index.js` and `/components/Layout.js`. More details are given below.

<br/>

### **Challenge A - Optimise Javascript**

Here, we would like you to reduce/refactor/rethink the javascript code in the `/public` directory. 
There are four files, `pink.js`, `orange.js`, `blue.js`, and `green.js`. They contain a similar code pattern, to build a functional counter.

**Please Note**

The functionality of the page must not change after the refactoring. The `counts should persist on refresh`, `the increment and decrement buttons should work as expected` and `the page should continue using AMP` i.e. `amp` should remain `true` in `/pages/index.js`

<br/>

### **Challenge B - Optimise HTML/CSS**

Here, we would like you to reduce/refactor/rethink the CSS styling and the HTML code in the `/pages/index.js` and `/components/Layout.js` files. 

There are redundant CSS styles that can be removed, additionally there are 

**Please Note**

The UI/UX of the page should not change after the refactoring. The `responsive layout of the page` must be maintained, `the increment and decrement buttons should continue working as expected` and `the page should continue using AMP` i.e. `amp` should remain `true` in `/pages/index.js`

---

## Submission

There are multiple ways you may submit your code.

1. Create a `private` Github repository and give us access to the page. This option is preferred
2. Mail a zipped folder of the project to us
3. Please ensure that the `yarn dev` command runs without any errors. Warnings are fine :)

---

## FAQ

Q. Do we need to build the project using `yarn build`  <br/>
A. No, the test will be evaluated using `yarn dev`, so feel free to skip the build process

Q. What are the parameters of scoring for the test? <br/>
A. The parameters are ingenuity, reduction in lines of code, and maintaining the given instructions.

Q. Can I take up both the challenges? <br/>
A. We recommend that you focus on only one of them, but you are free to take up both the challenges. However in that case,while submitting, please create two separate solutions (projects).

Q. What will I learn from these challenges? <br/>
A. You will learn about state-of-the-art web technologies like AMP and NextJS; and making them performant. If you are selected for the internship, you will be working on these technologies during the period of your internship.

Q. I have spent a lot of time on these challenges but have not made much progress? What should I do? <br/>
A. First, don't feel disheartened, our challenges are in no way a perfect measure of your skills. If you are not satisfied with your solution, we would appreciate a write-up on how you attempted to solve the challenge and the steps you undertook towards your optimization.

