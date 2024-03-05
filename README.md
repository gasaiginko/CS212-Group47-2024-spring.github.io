# CS212-Group47-2024-spring.github.io
This is the repository of CS212 project for Tianyi and Ahmed (Group47) <br>
* [Content explannation](https://github.com/gasaiginko/CS212-Group47-2024-spring.github.io#content-draft-)
* [Files structure explanation](https://github.com/gasaiginko/CS212-Group47-2024-spring.github.io#file-structure-)

### Content Draft: <br>
-Topic: First Journy to Flagstaff <br>
-Orientation Group: Travellers and Freshman/International stuents of NAU <br>
-Basic Blocks: <br>

--Main Page: <br>
---Introduction of Flagstaff: Features of flagstaff (temparature, geometry, location, civilazation, life comsumption) <br>
---Weather Information at different districts <br>
---Insert a map of Flagstaff (if possible, its an drag-and-drop-able google map) <br>
---Two entries: Travellers and Freshhman/International students of NAU <br>

--Traveller's Page (subpage): <br>
---Introduction of Flagstaff for travellers <br>
---Places of interests: (introduction, weather, comment column, surrounding restaraunts and mails) <br>

--Students new to NAU's Page (subpage): <br>
---Surrounding Mails <br>
---Surrounding Restaraunt <br>
---Policy Tips <br>
---Places for study <br>

We can finish Main page first and then work on Traveller's page and Student's page respectively with same template.  <br>

### File structure: <br>
Main Page: index.html <br>
Traveller's Page: Travellers/index.html <br>
Student's Page: NAU/index.html <br>

For css/reference files, they are stored in the **same level** of folder with html file under ```styles```. e.x.: for ```/NAU/index.html```, its corresponding css file is stored at ```/NAU/styles/styles.css```. To check the file that html is using, you can also look for ```<link>``` element in the ```<head>``` section of html file. Similary, the static files such as images, docs, videos that are used in html are stored under same level of folder as ```styles.css``` (```./files/...png```).


