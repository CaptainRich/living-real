# Living-Real
A Realty Management Tool. This app is intended for private property owners who want to advertise their properties, manage their tenants and manage their real estate all in one place. This application also functions as a hub for tenants to access their property and pay their rent.

This app was done in collaboration by:
Grey Whittenberger, Cameron Wills, Seth Uschuk, Owais Islam, Richard Ay
(January 2021)


## Table of Contents
* [Application Walk Through](#application-walk-through)
* [The Various Readme files for this project](#the-various-readme-files-for-this-project)
* [Application Mind Maps](#application-mind-maps)
* [Technologies Used](#technologies-used)
* [Deployment Link](#deployment-link)
* [Usage Instructions](#usage-instructions)
* [Application Screen Shot](#application-screen-shot)

## Application Walk Through

There are different ways to utilize this application, depending on what kind of user is active.  

For a 'first-time' visitor, who could be a potential tenant, usage would start with a review of the images for the available properties.  The images are presented in a carousel to take maximum advantage of the available screen space.  When a particular property is of interest, the visitor can click on the image to obtain specific details of that property.  This detail view also includes a carousel of more detailed photos of the property.  The visitor can then submit an application (to the property owner), with the application fee, for consideration as a tenant.

For tenants, the landing page has a login feature which should be used.  Once logged in to the site, the tenant is taken to an information page which displays details of their particular property.  The tenant page also allows the review of the lease agreement and has payment options for rent and miscellaneous fees. An additional control on the tenant page permits the submission of a maintenance request (to the owner).

For owners, the landing page has a login feature which should be used.  Once logged in to the site, the owner can select a particular property to view/manipulate.  For a given property, the owner can view not only the details the tenant can view, but also private owner data (such as mortgage and tax information).  Owners can also view the maintenance requests from the property tenant.

## The Various Readme files for this project

1) Overview: [overview-readme.md](./documentation/overview-readme.md)

2) Owner:  [owner-readme.md](./documentation/owner-readme.md) 

3) Tenant: [tenant-readme.md](./documentation/tenant-readme.md)

4) Applicant: [applicant-readme.md](./documentation/applicant-readme.md)


## Application Mind Maps

1) Website users map - this map shows the overall capabilities of the various user types.  
[Property Users](./documentation/property-users.jpg)

2) Website usage map - this map shows the operations paths the various users of the website can take in navigating the site.
[Navigation Paths](./documentation/usage-flow.jpg)


## Technologies Used

* GraphQL
* Apollo Server
* JWT (JSON Web Token)
* Express.JS, NodeJS
* indexDB
* MongoDB
* Redux
* React
* Stripe
* Materials UI
* Deployment on Heroku


## Deployment Link
The deployment link on Heroku is: https://living-real.herokuapp.com   
[Heroku](https://living-real.herokuapp.com/) 


## Usage Instructions
There are three types of users for this application: potential renters, tenants, and owner/admins.

As a potential renter, login is not necessary, just browse the site and submit an application if necessary.

As an existing tenant, login with 'guy@email.com' using a password of 'test1234'.  You can then browse the site as a tenant, viewing your specific data and capabilities.

As an owner/admin, login with 'ted@email.com' using a password of 'test1234'.  You can then browse the site as an owner/admin with full capabilities.

## Application Screen Shot

![Landing Page](./client/src/assets/images/landing-page.jpg) Image of the site landing page.
![Admin Dashboard](./client/src/assets/images/admin-dash.jpg) Image of the admin/owner dashboard.
