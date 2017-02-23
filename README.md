# ROOST
## Javascript Conference

### Bob Holt - Intro to Application Architecture
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
  	- GET/POST/PUT/DELETE
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

### Irene Ros: Building the App, Part 2: Our First Page
#### constructor vs inheritance
  - model constructor: a constrcutor is a function that creates a new instance when it is called
    - `var ConstructorName = Backbone.Model.extend({name: 'foobar'});`
  - binding Model to an API server
    - `task.fetch() => GET`
      - gets the data for the model
    - `task.save() => POST, PUT`
      - used to save a new model && update an existing modal
    - `task.destroy() => DELETE`
      - used to delete a model on the server
  - RESTful API & Backbone
    - `GET /model/:id`
    - `POST /model`
    - `PUT /model/:id`
    - `DELETE /model/:id`
  - overriding HTTP protocol
    - i.e. Web Sockets; need to override `sync` && `parse` methods
  - `urlRoot` allows us to override Backbone default url naming/routing
  - `.fetch()` is asynchronous so we need to specify a callback to have resource
    - using differeds
    - using promises
  - `.destroy()` && `.save()` have flag for `{wait: true}` which makes the call synchronous
  - handling errors
    - 


### Mike Pennisi - AMD and RequireJS
#### Old and Busted: The Module Pattern
  - closures and controlling the global scope
  - Module Pattern: seperation of concenrs, dependencies and selecting what can be exposed
  - what's wrong with this picture?
    - dependencies are implicit (difficult to maintain larger projects)
    - dependends on global leakage
    - module authors have to implement their own collision handling solutions
    - tension b/w best practices for front-end and back-end

#### New Hotness: AMD (async module definition)
  - explicit dependencies
  - no need for gobal dependencies
  - consumer controls dependency names
  - suport best practices for development and production with dynamic script injection

#### Supporting Non-AMD libraries: "shim" config
  - defines local modules in require

#### Optimization
  - RequireJS has an optimization tool that does the follow:
    - comibnes related scripts together into build layers and minigies them via qgligy or closure compiles
    - minifies css

### Irene Ros: Building the App, Part 3: Adding a Collection
#### Backbone Collections
  - like an array of models
  - `var Tasks = Backbone.Collection.extend({ model: Task });`
  - `var myTasks = new Tasks([ {name: 'foo'}, {name: 'bar'} ]);`

#### Filling a Collection
  - Initialize
  	- `var collections = new Tasks([models]);`
  - Rest
  	- `collection.reset([models]);`
  - Add
    - `collection.add([models]);`

#### Creating new Models
  - `.create()` method is a convience method that allows for creating a new model within a collection. this is equivalent for:
    1. instantiating a new model
    2. saving it to the server
    3. adding it to a collection

#### Events
  - when a collection changes, appropriate events will fire to signal the change that occured

### Bob Holt: Building the App, Part 4: Wiring it Together
#### Wiring & Layout
  - Abstraction & Reusability
    - DRY (don't repeat yourself) via: "Pragmatic Programmer"
    - Once and Only Once
  - Perils of too-early abstraction
  	- "Refactoring" Martin Fowler

#### Routing
  - add jQuery script to prevent anchor links from using browser behavior and to use bb routing `$('document').click('a[href]:not('data-bypass')', function(evt) {evt.preventDefault()});`

### /day one
### day two

### Ben Alman: Improving Your Styling Workflow
#### Better styles with Stylus
  - http://learnboost.github.io/stylus/ stylus instead of sass b/c it doesn't require ruby
  - grunt-contrib-sass is very slow because it calls out to ruby
;

### Irene Ros: Building the App, Part 5: Writing Data
#### Putting the "C" in CRUD - creating data in the app
  - https://developer.mozilla.org/en-US/docs/Web/API/File web file API
  - https://github.com/rendro/vintageJS plugin for vintage photo effects on uploaded photos
  - no bower plugin? `$ bower install` + github url

### Mike Pennisi: Building the App, Part 5: Writing Data
#### Evergreen browsers + open standards process
  - crazy fun playground for web app developers
  - progressive enhancement || graceful degradation
    - dynamically reduce feature set according to available resources
      - "we can still accomodate you, but the experience will be a little different"
    - what about non-standardized features?
    - what about legacy browsers?
      - might be latest version of chrome buy maybe my machine doesn't have a web cam
  - The Adapter Pattern
    - translate incompatible interfaces
    - sizzlejs http://sizzlejs.com/ adpater for selectors (used in jQuery)
  - getUserMedia api (https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia)
    - shim = GUM (https://www.npmjs.org/package/getusermedia)
    - http://addyosmani.github.io/getUserMedia.js/face-detection-demo/

### Mike Pennisi: Unit Testing
#### Why test?
  - test are great for developers!
    - safety net
    - technically enforced documentation
    - signal for coding standards in open source software
  - tests are great for the project
     - testable code is modular code
     - reusable, flexible, readable
     - good code

#### A note on software testing
  - what is a software test?
    - a piece of code that tests another piece of code
    - code that automatically determines if production code is operating as intended
      - unit test === distinct units/modules with specific functionality
      - functional test === units/modules functioning together
      - integration test === whole system is working correctly
    - test classifications
      - static code analysis (i.e. jshint)
      - fuzz test === throwing random data at a system and seeing how it crashes or fails to crash
      - smoke test === superficially tests target system, runs very quickly
      - regression test === found a bug and inserting this test so that bug doesn't come back

#### The Unit Test: structure
  - setup
  - execution
  - validation
  - teardown

#### The Unit Test: assertions
  - defines some simple expectation. at the most basic level: "does the given expression evaluate to `true`"
  - may be defined with more advanced semantics:
    - does the given array have the expected elements?
    - does the given function throw an error?
    - etc.

#### Test-Driven Development
  - http://tddjs.com/
  - defined: a workflow for authoring code where unit tests are written before the logic they excercise.
  - process:
    - write a test
    - watch it fail
    - write the bare minimum to make it pass
    - re-factor as necesary
  - why?
    - think about the API first
    - organize code to be testable from the start
    - avoid technical debt
    - maintain assurances about entire code base as it develops
    - emotionally satisfying

#### Behavior-Driven Development
  - "Introducing BDD" Dan North
  - driven by business value in agile workflow over simply technical testing in unit testing. brings in whole team, technical and non-technical
  - why?
    - help avoid "brittle" tests (more on this notion later)
    - encourage wholistic thinking about product/service
    - 

#### Domain-Specific Languages
  - [warning] superficial distinctions ahead!
  - using more plain english
    - i.e. `suite()` === `describe()` || `setup()` === `it()` 
    - Jasmine is BDD style

#### Testing Tools
  - Mocha (http://mochajs.org/)
    - assertions
      - agnostic-choose your favorite library
      - no enforcement of assertion count
      - assertion libraries for mocha
        - Should
        - Expect.js
        - Chai
    - test structure
      - support multiple styles
      - including all of the above!
    - async API
      - simple `done` callback
      - async-on-demand
    - runs in browser and in nodejs out of the box

#### Integration Tests
  - we want to express acceptance criteria for module interactions in a separate place and at a higher level
  - we don't want brittle tests
    - unit tests are brittle, they only test a single specific thing
  - did we build the right thing? (integration test)
  - did we build the thing right (unit test)

#### why do we need unit tests when we can run integration tests?
  - unit tests are fast, targeted tests
  - easily test edge cases and failure modes
  - test conditions that may not occur in your app today
  - localized errors
  - integration tests take a while to setup/teardown whole application

#### Intro to Selenium
  - http://docs.seleniumhq.org/
  - the application object
    - ability to create fixtures
    - repetitiion and reuse of code
    - building a secondary application that just runs tests; for your eyes only
      - just don't go crazy
  - remember to consider race conditions; integration tests won't run as fast as your local box

### Ben Alman: Optimizations
#### What to do before we deploy
  - RequireJS as a build tool to compress and concatenate js files (http://requirejs.org/docs/optimization.html)
  - two modes / grunt tasks for dev && prod
    - dev mode / fast development environment
      - easy to write
      - easy to debug
    - prod mode / fast raw performance
      - easy to deploy
      - remove whitespace, comments, etc.
      - debugging?
        - using source maps
  - follow grunt task with watch to keep it open and running
    - grunt connect:dev watch
      - starts connect web server and keeps it alive
    - for prod pass option in task for `keepalive: true`
  - `bower install --save almond` install almond a smaller build of require for prod (https://github.com/jrburke/almond)

### Bob Holt: Making this a boilerplate
#### Remove the server
  - remove express, sqlite from package.json
  - remove grunt tasks for server
  - remove server dependencies

### /day two

### Resources
  - tool list: https://tinyurl.com/roost-links
  - app: https://github.com/bocoup/roostagram
  - Day 1 Slides: http://tinyurl.com/roost-slides-1
  - Day 2 Slides: http://tinyurl.com/roost-slides-2
