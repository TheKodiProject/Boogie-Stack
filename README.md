# Say hello to the Boogie Stack!

![The Remix Boogie Stack](/app/assets/boogie-stack.png)

## Project Objective

---

The primary goal of this project is to create a remix stack template that can be utilized in modern development settings. The project also aims to provide an enjoyable experience. This will be experimental and on-going.

The following are the key aspects of focus:

- Accessibility, which is often overlooked, will be supported as much as possible out of the box.
- End-to-end type safety
- Developer experience, which should prioritize productivity and happiness
- End-to-end testing
- Easy deployment to Vercel.

## Building Blocks

---

To achieve the project objectives, the template will need to incorporate the following components:

- [MongoDB](http://mongodb.com/) is a flexible and scalable NoSQL database used in modern web development and is a key component of the Boogie Stack template. It will be used along with [Prisma](http://prisma.io/) and TypeScript to achieve end-to-end type safety.

- [Prisma](http://prisma.io/) is a modern database toolkit used in web development. It provides a type-safe and efficient way to access databases, making it easier to build scalable and maintainable applications. In the Boogie Stack template, Prisma is used in conjunction with MongoDB and TypeScript to achieve end-to-end type safety.

- [Remix](http://remix.run/) is a web development framework that provides an opinionated approach to building web applications. It focuses on server-side rendering for faster load times and better accessibility and SEO. Remix also offers pre-configured tools and libraries commonly used in web development while still allowing for flexibility and customization. This balance between the basics of web development and modern interfaces encourages best practices while still allowing for innovation.

- [TailwindCSS](https://tailwindcss.com/) is a pre-defined set of classes for styling HTML elements. By using it, we can benefit from its extensive set of pre-written styles, avoid writing custom CSS code from scratch, and speed up development time. TailwindCSS also provides responsive design classes that make it easy to create a layout optimized for various screen sizes.

- [RadixUI](https://www.radix-ui.com/) is a collection of open-source UI primitives that aim to help developers build accessible and composable interfaces. It provides a set of low-level components that can be used as building blocks to create user interfaces. RadixUI is particularly useful for accessibility because it provides accessible components out of the box that conform to the latest accessibility standards. This means that developers can create interfaces that are easily navigable and usable by people with disabilities, without needing to spend additional time and effort on accessibility testing and implementation.

- [Framer Motion](https://www.framer.com/motion/) is a powerful animation library that can be used to create stunning modern animations. It is particularly useful for creating complex and sophisticated animations with ease. Framer Motion provides a range of features that make it easy to create animations, such as declarative syntax and the ability to animate any property that can be set with CSS. This means that you can create animations for CSS properties such as color, size, position, and more. Framer Motion also provides an intuitive API for creating animations with keyframes and easing functions, giving you fine-grained control over your animations. Using Framer Motion, you can create a wide variety of animations, including transitions between pages, hover effects, and complex interactions. Framer Motion also provides support for advanced features such as physics-based animations and gesture-based interactions.

- [Cypress for E2E](https://www.cypress.io/) is an efficient end-to-end testing framework with a user-friendly API and a visual test runner. It runs directly in the browser, providing real-time feedback and easy access to the application's DOM. Cypress is particularly useful for simulating user interactions and handling common web application issues.

- [Vercel](https://vercel.com/) is a cloud platform for static sites and serverless functions. It provides an easy and efficient way to deploy web applications. In the context of the Boogie Stack project, it will be used for easy deployment. Vercel offers seamless integration with GitHub, GitLab, and Bitbucket, which makes it easy to set up a continuous deployment pipeline. This means that changes to the codebase can be automatically built and deployed to the Vercel platform, reducing the time and effort needed to deploy updates. In the end, Vercel is a powerful tool that can help us simplify the deployment process and focus on building the best possible application.

\*_\*\*(Note that these are merely opinions based on the experience of the community and myself)_

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
