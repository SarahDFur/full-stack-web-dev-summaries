1. Create an Online Backup:
    - git remote add origin <url>
    - git push origin <branch>

2. Sync Computer → GitHub:
    - git push origin <branch>
    - git push origin <branch> -f

3. Sync GitHub → Computer:
    - git pull origin <branch>


- Joining a team on GitHub:
    1. Dowload the team's code
    2. Contibute to the code
    - Steps:
        1. git clone the team's repo:
            - cd ~/Desktop
            - git clone [https://github.com/...] [name of folder]
        2. work with the code as normal

- Removing .git folder from local repo (if needed with command):
    * Open Git Bash
    * cd to project folder
    * run: rm -fr .git