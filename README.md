> # Due to severe weather condition, the workshop will be hosted on [Zoom](http://tinyurl.com/Intro-To-APIs-nwHacks)!

# nwHacks-2024-Intro-to-API

# Setup

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repo
    - Open terminal, and goto the directory (folder) that you want to clone this repo
    - Run `git clone https://github.com/michelleykim/nwHacks-2024-Intro-to-API.git`
    - You should see another directory appear, named something like: nwHacks-2024-Intro-to-API

2. Install [node](https://nodejs.org/en/download)
    - If you're unsure, use `node -v` command to see if you have node installed
      - If you get an error, most likely means you don't have node
    - You should be able to click your OS type under the LTS (Long-Term Support) and download the installer
    - Open the installer and follow the instruction to install node
    - Run `node -v` to see if node is correctly installed
      - If you see a series of number like `20.8.1` or `v20.8.1` or something that looks like a version number, you're done!

3. Install HTTP Server
    - Open terminal, and run `npm install -g http-server`
    - You might get some sort of permissions error. In this case, try:
      - [macOS/Linux] try `sudo npm install -g http-server`
      - [Windows] try to run terminal as administrator. You can right click on the terminal icon to see the option
    - Now, you can run `http-server` in your terminal (within repo directory, nwHacks-2024-Intro-to-API) to run html file.
      - Once you run the command, you should see the list of available ports you can view the html file. (something like "http://10.0.0.30:8080")
      - You should see the frontend we pre-built when you navigate to one of the ports. 

4. Create an [Open AI API account](https://platform.openai.com/overview)
    - Once you make the account, navigate to "API Keys" section on the left panel. 
    - Create a new key by clicking "Create new secret key" button
      - **Make sure you save the secret key in the `secrets.json` file, replacing the value of `apiKey`.** You cannot retrieve the same key again once you're past this step.
      - If you accidentally lost the key, don't panic! You can simply delete the old key and make a new one. Remember to save it somewhere this time!

If you're done all the steps above, you should be good to go! See you @ Thursday, Jan 18th 7:40 PM PST.
