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
  - gruntfile
    - break up tasks / modules to keep gruntfile light
  - git
    - add npm modules to gitignore
    - only check in package.json file

### Irene Ros - ntro to MVC on the Client
#### MVC Parts
  - Model
    - responsible for data access, biz logic and state mngmnt
  - View
    - render ui
  - Controller
    - broker b/w model & view

#### Other MV* like approaches
  - Model-View-Adapter
  - Model-View-Presenter
  - Model View ViewModel
  - Presentation-Abstraction-Control

#### Poor coding patterns
  - all UI powered
    - event driven callbacks
  - repetitive
    - how many times are we going to selelct that element?
  - not organizer into logical groups
    - no UI components, no data separation
  - hard to follow the flow
    - flow is dictated by events
  - tightly coupled data and views
    - updating views in callbacks requires data fetching has access to view
  - lack of inheritance
    - resulting in duplication of attributes and lack of propagation of common behavior
  - all UI componenets built using jQuery
    - no template and reuse

#### what does Backbone provide?
  - class inheritance
  - event system
  - history management

#### where does Backbone fit?
  - server
    - maintains state
    - servers data
    - handles data changes
    - responsible for:
      - security
      - storage
  - bb
	  - fetches data
	  - transforms data
	  - renders views
	  - updates views
	  - handles view events
	  - updates data

#### what Backbone doesn't offer
  - an extensive API
    - bb is initially minimal
  - widgets
    - no built in reusable widgets
  - data-binding
    - andy change you want to the view, you have to make yourself
  - code organization patterns
    - there are many ways to organize your code and there isn't one correct way
  - view management
    - you can create views easily but handling the rendering of child views, view clean up and so on is left to the developer

#### what Backbone does offer
  - lightweight
    - backbone is intentionally minimal & small (~1600 lines of code)
  - inheritance
    - 
  - event system
    - view updating on data change
    - maintaining state
  - override
    - extensive plugins and easy to override on your own for your own use

### Resources
  - tool list: https://tinyurl.com/roost-links
  - app: https://tinyurl.com/roost-app-1a


### /day one