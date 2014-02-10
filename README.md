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
