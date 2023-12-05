![Alt text](image.png)

Vite takes care of:
1. Transpliation == compilation
    babel
2. Bundlers:
    - Webpack - bundle
    - Parcel - bundle
    - Rollup - bundle
    - esbuild - updated → vite uses it, very fast, local

Website: https://vitejs.dev/

- Check versions of node & npm on your device by typing into the command line:
    * node -v
    * npm -v
- If either aren't indtalled look for a tutorial on youtube, using nvm: 
    * https://www.youtube.com/results?search_query=install+nodejs+with+nvm
- Links:
    * MacOS/Linux: https://github.com/nvm-sh/nvm
    * Windows: https://github.com/coreybutler/nvm-windows
- Install latest version of node and nvm by running: 
    * MacOS/Linux: nvm install --lts 
    * Windows: nvm install latest → https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/

----------------------------------------------------------------------------------------
After all the installations, lets setup our project:
- using npm, type the following command into your terminal:
    * npm create vite@latest
- answer the questions given
- run the lines given in the terminal:
![Alt text](.png)
- now you can open your browser in the localhost address given from the previous step and see the default page.