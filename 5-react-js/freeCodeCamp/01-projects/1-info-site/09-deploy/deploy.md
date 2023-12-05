- Deploying to Netify:
    * download your scrim to your computer and open in vs code
    * open the terminal in vs code
    * check if you have node and npm downloaded. Run:
        - node -v
            - if you didn't get a version →
                1. https://nodejs.org/en/download
                2. using nvm:
                    - MacOS - video tutorial → https://www.youtube.com/watch?v=ohBFbA0O6hs
                    - MacOS/Win - written tutorial → https://css-tricks.com/how-to-install-npm-node-nvm/
                    - Win video tutorial → https://www.youtube.com/watch?v=c_Bb7D7W5LI
                    - Win written tutorial → https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows
        - npm -v

    * type:
        - npm install
        - npm run build
        - the 'index.pack.js' file is what netify uses to deploy your project
        - be sure to delete the 'node_modules' folder
    * sign up / in to netify
    * deploy by drag-drop
    * you can edit the deployed files by going to the 'deploys' tab in netify and reuploading your project folder