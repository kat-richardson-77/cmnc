# City of Manchester Netball Club

## Table of Contents

### Introduction/Description
The project is for a website for people interested in netball to find details of training sessions, local leages and England Netball's govening body

### Project Overview
The cmnc website is for all people interested in netball to learn about the history of the club. Find details on training sessions run by City of Manchester, and to find out about all our policies.  
It will also provide an introduction into the current Manchester Evening Netball league, and links to the governing body of Netball: England Netball.

### User Experience (UX)
- Project Goals
  - create a unique City of Manchester Netball Club website
  - show training sessions and locations
  - show history of the club, and it's growth
  - have a contact us for more information

- User Stories
  - user storiy 1
    - As a netball player I would like to see a website with a history of a club, and be able to contact them for more information.
    - Accpetance Criteria:
     - to provide details of the club
     - to provide the background of the clubs beginnings
     - to provide an area to contact us for more information
  - user story 2
    - As a netball player I would like to be able to see training sessions
    - Acceptance Criteria:
      - provide dates for training sessions
      - provide details of the training sessions
  - user story 3
    - As a new netball player to Manchester I would like to be able to see what Netball clubs train on which day.
  - Acceptance Criteria:
    - to show details of the club and it's history
    - to show details of training provided by the club
    - to show details of how to contact the club
    - to show details of where the training is
    - to show details of other / affiliated netball around Manchester

- Design Choices
  - I utilised the clubs main colours to create a header bar with the club name, logo and menu items for easy navigation.  I also decided to keep the main background plain in order to be able to read information easily to keep a clean and neat visual setting.  The footer details also follow the clubs colour schemes
- Colour Scheme
  - City of Manchester's main colours are Black and Pink.  I also used a white back ground with black lettering to help the website have a clean and professional look
- Typography
  - I have used Verdana, Geneva, Tahoma, sans-serif font family throughout the website, in both text and headings as this is a widely used font with easy to ready definition
- Information Architecture
  - Main page:
    - Name and logo
    - history of the club
    - menu to other pages/sections
    - footer
  - Contact Us page:
    - name and logo
    - names/contact numbers of key members
    - contact us form
    - footer
  - Training page:
    - name and logo
    - calendar
    - list of training sessions
    - footer

### Wireframes

<img width="3024" height="4032" alt="cmnc-design" src="https://github.com/user-attachments/assets/aed14223-7bbd-490b-99cb-abaee6a884c6" />

### Features
- Existing Features
  - Menu list
  - Contact us form
  - Calendar
  - list of training sessions
- Future Features
  - Addition of Spond - which is a sports app that allows event planning and payments.
  - more interactive drop down menu
  - Add more features
  - More interactive contact us form to engage the user more
  - interactive / more features on the contact us form

### Technologies Used
- HTML5 was used to structure the 3 pages, using CSS to add styling to headings and the navigation bars which were designed using Bootstrap.  For version control and hosting I used Git and Github.  I used FavIcon for the small logo on the browser tab.  The training calendar was pulled directly from Google, I created a Google Training calendar and embedded it into the Traning web page

### Testing
  - Manual Testing
    - tested pages on local build of visual studio
      - loaded Home page: checked link to engage works, and navigation menu works ensured menus were responsive to resizing
      - loaded Contact Us page: checked form is available and can reset the form, and click on send and navigation menu works ensured menus were responsive to resizing
      - loaded Training page: checked calendar is visible and can see future/past training events within the month, ensure the list of training is available on the right sidde and navigation menu works ensured menus were responsive to resizing
    - tested pages on pre-release version of website
      - loaded Home page: checked link to engage works, and navigation menu works ensured menus were responsive to resizing
      - loaded Contact Us page: checked form is available and can reset the form, and click on send and navigation menu works ensured menus were responsive to resizing
      - loaded Training page - checked calendar is visible and can see future/past training events within the month, ensure the list of training is available on the right sidde and navigation menu works ensured menus were responsive to resizing
    - test live page to ensure there are no broken links
      - loaded Home page: checked link to engage works, and navigation menu works ensured menus were responsive to resizing
      - loaded Contact Us page: checked form is available and can reset the form, and click on send and navigation menu works ensured menus were responsive to resizing
      - loaded Training page: checked calendar is visible and can see future/past training events within the month, ensure the list of training is available on the right side and navigation menu works ensured menus were responsive to resizing
      - navigation links are highlighted on the page you are on for all pages
      - checked both external links to Engage and MENL are working launching in a new tab
  - User Story Testing
    - user story 1.  As a netball player I would like to see a website with a history of a club, and be able to contact them for more information.  How this was met: the website provided a history of the club, and provided a contact us for more information section.
    - user story 2. As a netball player I would like to be able to see training sessions.  How this was met: the website provided a training sessions page with details in a calendar and list of traning sessions and locations.
    - user story 3. As a new netball player to Manchester I would like to be able to see what Netball clubs train on which day.  How this was met: The home page shows details of the club and it's history, the contact us page shows details of how to contact the club, the website provided a training sessions page with details in a calendar and list of traning sessions and locations.  There are two clickable links to show details of other / affiliated netball around Manchester.
  - Validator Testing
    - HTML
      - No errors were returned when passing through the official W3C validator
    - CSS
      - No errors were found when passing through the official (Jigsaw) validator
  - Lighthouse Testing
    - The homepage was tested for Website using Chrome Lighthouse 
      <img width="946" height="220" alt="Lighthouse10062026" src="https://github.com/user-attachments/assets/5d90b758-dbe0-4683-a13a-5ad36991dd54" />
    - The homepage was tested for mobile using Chrome Lighthouse 
      <img width="880" height="288" alt="LighthouseMobile10062026" src="https://github.com/user-attachments/assets/459fae8a-88f8-4455-b0b1-44055f52de40" />
  - Browser Compatibility
    - tested on Google Chrome (Version 149.0.7827.55 (Official Build) (64-bit))
    - tested on Microsoft Edge (Version 149.0.4022.62 (Official build) (64-bit))
  - Responsiveness Testing
    The website was tested with at multiple screen widths to ensure the layout adjusted accordingly.
  - Bugs Fixed
    - Original testing showed that menues were not responsive to resizing, resolved this by adding col structure
    - Original testing showed that links were not opening in another window, added _blank to code to resolve
  - Known Issues
    - form does not currently send information as this is a first draft version without the backend coding to send the details, this form will be worked on in subsequent iterations of the website

### Deployment
    - Deployment Steps
      1. Log into GitHub repository
      2. Go to project (cmnc)
      3. Using main branch go to Deployment section
      4. Click on the github-pages (https://kat-richardson-77.github.io/cmnc/)
    - Local Development Setup
      - Using Visual Studio,  I installed the extension Live Server, open the folder, then rightclick on index.html and run with live server top open within your browser.
    - Cloning the Repository

### Screenshots of finished projects:
    - home page <img width="2878" height="1690" alt="HomePage" src="https://github.com/user-attachments/assets/ecd329d1-6a70-42b0-a712-de741093cde8" />
    - contact us page <img width="2878" height="1090" alt="ContactUsPage" src="https://github.com/user-attachments/assets/6998f58d-b6fa-4bd2-b4dc-4b4897a27f60" />
    - training page <img width="2856" height="1782" alt="TraningPage" src="https://github.com/user-attachments/assets/dd53fb3e-5e30-40f2-ad3e-0dae7587f760" />

### Credits
  - The England Netball logo was taken from [England Netball's Engage Website](https://engage.englandnetball.co.uk/EnglandNetball)
  - The MENL logo was desgined by me for the MENL League
  - Bootstrap
  - Google Calendar
  - favicon.io (https://favicon.io/favicon-converter/) used to create the favicon

### logo's
  - CMNC Logo
<img width="179" height="179" alt="cmnc-logo" src="https://github.com/user-attachments/assets/ba6e9c1f-66e7-41a3-a487-083f9bb88864" />
  - MENL Logo
<img width="100" height="101" alt="MENLLogo" src="https://github.com/user-attachments/assets/444345ef-2ad9-4240-940c-7a8a5514a6c9" />
  - England Netball Logo
<img width="150" height="150" alt="ENLogo" src="https://github.com/user-attachments/assets/92ff5f5b-1376-4f25-9321-4581b368c02d" />
