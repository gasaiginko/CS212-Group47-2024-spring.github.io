# CS212-Group47-2024-spring.github.io

**Also available at Azure: [https://tc922.z13.web.core.windows.net/finalproject/index.html](https://tc922.z13.web.core.windows.net/finalproject/index.html)**

## Please Write Down your updates to prevent overwriting, format: (file, content, time-date), and please insert your new code instead of directly upload (if the file already exists) ##
**Example: 1. (/Travellers/script.js, comment added, 20:00-4-17)**
1. (index.html and /styles/script.js and styles.css, weather function added, 20:36-4-19)
2. (index.html, online comment added, 6:37-5-1)


## Project Introduction ##

This is the repository of CS212 project for Tianyi and Ahmed (Group47) <be>
* [Content explannation](https://github.com/gasaiginko/CS212-Group47-2024-spring.github.io#content-draft-)
* [Files structure explanation](https://github.com/gasaiginko/CS212-Group47-2024-spring.github.io#file-structure-)

**[To view our website](https://gasaiginko.github.io/CS212-Group47-2024-spring.github.io/)**
  
### Content Draft: <br>
-Topic: First Journy to Flagstaff <br>
-Orientation Group: Travellers and Freshman/International stuents of NAU <br>
-Basic Blocks: <br>

--Main Page: **Tianyi, Ahmed** <br> 
---Introduction of Flagstaff: Features of flagstaff (temparature, geometry, location, civilazation, life comsumption) <br>
---Weather Information at different districts <br>
---Insert a map of Flagstaff (if possible, its an drag-and-drop-able google map) <br>
---Two entries: Travellers and Freshhman/International students of NAU <br>

--Traveller's Page (subpage): **Ahmed** <br> 
---Introduction of Flagstaff for travellers <br>
---Places of interests: (introduction, weather, comment column, surrounding restaraunts and mails) <br>

--Students new to NAU's Page (subpage): **Tianyi** <br> 
---Surrounding Mails <br>
---Surrounding Restaraunt <br>
---Policy Tips <br>
---Places for study <br>

We can finish Main page first and then work on Traveller's page and Student's page respectively with same template.  <br>

### File structure: <br>
Main Page: index.html <br>
Traveller's Page: Travellers/index.html <br>
Student's Page: NAU/index.html <be>


## How comment firebase realtime database organized for writing and reading data:

![image](https://github.com/gasaiginko/CS212-Group47-2024-spring.github.io/assets/96473587/6d9a79f3-6e1c-4dab-b706-06850b646ff8)


For css/reference files, they are stored in the **same level** of folder with html file under ```styles```. e.x.: for ```/NAU/index.html```, its corresponding css file is stored at ```/NAU/styles/styles.css```. To check the file that html is using, you can also look for ```<link>``` element in the ```<head>``` section of html file. Similary, the static files such as images, docs, videos that are used in html are stored under same level of folder as ```styles.css``` (```./files/...png```).


