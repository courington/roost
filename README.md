# ROOST
## Javascript Conference

### @bobholt - Intro to Application Architecture
#### Arch of a GUI App
  - scalable
  - simply written
  - modifiable
    - "what does modifiable mean?"
    - evolvable
    - extensable
    - customizable
    - configurable
    - reusable
  - portable
  - reliable

#### Model-View-Controler pattern
  - Model: stores data
  - View: UI
  - Controller: passes data, view : ui && model : create/read/update/delete

#### API Services
  - XML-RPC
  - SOAP
  	- downsides
  		- payload size (tags && extra markup === bloat)
  		- complicated
  - REST (representational state transfer)
  	- GET/POST/UPDATE/DELETE
  	- payload can be anything we want (json, xml, html, css(?))
  	- ideal payload === json
  - Transport Protocols
  	- SMTP
  	- HTTP
  - Messaging Protocols
  	- XML

#### Implementation
  - where to put our source code
  - managing third-party code
  - testing our code?
  - automating repeated tasks

### Mike Pennisi - Breaking Down Requirements
#### Introduction
  - we're hired
  - about our employer
    - company: client entrepresises, ltd
    - ceo: malibu jenkins
  - project summary
    - a brand new wen application that will revolutionize the way teenagers compete for attention on the internet

#### Product Requirements
  - photobooth aka Roostagram
    - share photos
      - take a photo (webcam)
      - upload photo file (file api)
    - gallery view
    - individual photo view
      - some sort of trendy filter (css filters / canvas api)
    - delete photos

#### Engineering Standards
  - performance
  - fault tolerance
    - build robust applications that can't break easily
    - if there is a failure there should be some graceful recovery
    - including some reporting tools to identify failure points (ex: IE7 issues)
  - security
    - private data is only submitted on secure channels (https)
    - only private data can be accessed by authorized users
    - account for injection attacks / cross-site scripting (csrf)
  - development workflow
    - how we run our tests? where to put new tests, how to write them, etc.
    - version control
    - formalize build process
  - documentation
    - document everything that's relevant and nothing that's not
      - the modules (what things are)
      - the source (how things work) (inline comments)
      - the process (how things got this way)
  - code style
    - all code in any code-base should look like a single person typed it, no matter how many people contributed
      - idiomatic.js

#### Technical Requirements
  1. 

### Ben Alman - Building the App, Part 1: Getting Started
#### Getting Started
  - npm install --save-dev grunt grunt-contrib-{copy, watch, jshint}
    - {copy} is a bash helper




### /day one