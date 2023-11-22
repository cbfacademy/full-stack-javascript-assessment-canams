# Deployment

Deployment in the tech world is akin to preparing for a grand evening out. Much like selecting the perfect attire and accessories for a special occasion, your application requires the finest deployment practices to stand out in the vast digital realm.

As part of your assessment, you're expected to deploy your application for usability.

## Learning Outcomes

1. **Deployment Platforms:** Understand the various deployment platforms and the unique advantages each provides.

1. **Environment Configuration:** Master techniques for securely handling environment variables to protect your application's sensitive data.

1. **Continuous Deployment:** Grasp the principles of continuous deployment to simplify the update process for your application.

1. **Domain Management:** Comprehend the procedure to procure a custom domain and recognise the significance of safeguarding it with HTTPS.

1. **Error Handling:** Efficiently tackle unexpected errors and challenges, ensuring your application's consistent functionality.

1. **Scaling:** Prepare for potential surges in user traffic by learning how to optimally scale your application.

1. **Rollbacks:** Familiarise yourself with methods of reverting to a prior version of your application if post-update complications arise.

## Deploying as a Monolith

By default, this codebase is structured as a monorepo. However, if you opt for a monolithic deployment, follow these steps:

1. **Serve Frontend via Backend**: Adjust your backend to serve your React frontend. After finalising your React frontend, execute the `npm run build` command from the frontend directory to create a static build, which can then be served by Express.

   ```javascript
   app.use(express.static(path.join(__dirname, "../frontend/build")));

   app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
   });
   ```

2. **Unified Build Script**: Incorporate a single command to activate both your frontend and backend. Integrate this into the [`package.json` located at the root of this codebase](../package.json).

   ```json
   "scripts": {
       "build": "npm run build --prefix packages/frontend && npm run build --prefix packages/backend"
   }
   ```

Upon adding this to the `package.json`, execute `npm run build` from the codebase root.

## Useful Tools & Resources

- **Monolithic vs. Microservices**: Grasp the distinctions before initiating deployment. This [article](https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith) offers a comprehensive overview.
- **Deployment Checklists**: Always beneficial! Here's one for [Heroku](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment) and [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps).

## Additional Steps

- **Testing Before Deployment**: Prior to deployment, conduct a complete set of unit tests to confirm everything is in order.

```sh
npm test
```

- **Monitoring and Logging**: Utilise tools such as [Loggly](https://www.loggly.com/) or [Datadog](https://www.datadoghq.com/) to supervise the app's performance and detect potential issues promptly.

- **Backup**: Always back up your database and application before deploying, especially major updates. Most cloud platforms provide uncomplicated backup solutions.

## Deployment Tips

1. **Environment Configuration:** Safeguard your environment variables. Platforms like Heroku are ideal for securely setting and managing them.

1. **Deployment Platforms:** Acquaint yourself with platforms such as Heroku, DigitalOcean App Platform, and AWS Elastic Beanstalk for application deployment.

1. **Database Management:** Maintain your association with MongoDB Atlas, and ensure your IP whitelist settings are configured to permit connections from your app's hosting platform.

1. **Post-Deployment Checks:** Following deployment, meticulously test your application and ensure HTTPS is enabled for heightened security.

## Practical Tips

- **"Works on My Machine" Syndrome**: It's a common phenomenon where things operate flawlessly on a local setup but malfunction in production. Everyone faces this at times, and refining debugging skills can be invaluable.

- **Feedback Loop**: Advocate for a robust feedback mechanism for the deployed app. User insights can reveal unforeseen issues.

- **Version Control**: For every deployment, tag your codebase in your version control system (like git). This aids in easier rollbacks and troubleshooting.

- **Traffic Management**: Should your application witness increased popularity, consider delving into Load Balancers and CDNs for an enhanced user experience.

## Final Thoughts

Though deployment marks a crucial milestone, it isn't the journey's end. The path ahead involves continuous learning, improvements, and iterations. View challenges as avenues for growth.

You're equipped and ready! Elevate your application's potential. 🚀🎉
