# Assessment criteria

## Three must-haves:
* Account for, and solve a race condition:  
The API we have provided will return all the data needed to solve the task. However, one endpoint is particularly slow and will not return the data as fast as the other.
We want the candidates to code defensively for this and display the information as cleanly as possible given the unreliable data source. At the minimum it should not omit data because it arrived late. 
* Modular code and reusable components:  
Our products are driven by component based development, we would like to see a good grasp of this concept.
* Write good tests:  
We are a test-heavy development group and almost everything is tested. We want to use good unit tests and well-structured code that is easy to test. The candidates can use any framework they want. 

## Tests:
Unit tests should at least cover the scenarios below:

* The correct number of records are returned for a given a filter
* The JS finds the total number of filetypes in the data
* The code can tolerate a slow response from the API
* The code makes another request if no data is returned
* The code handles a 500 error from the API

## API:
### /users
```
[{
  id: 1,
  givenName: "Peter",
  familyName: "Capaldi"
},
...]
```

### /types
```
[{
  creationDateTime: "2016-08-17T13:07:19.800Z",
  id: "article",
  documentsCount: 5,
  description: "Articles about the programme",
  name: "Article Page",
  colourId: "golden"
},
...]
```

### /files
```
[{
  creationDateTime: "2015-01-27T10:33:11.234Z",
  status: "Scheduled",
  modifiedBy: 3,
  type: "article",
  uri: "/project/test/content/9dc1b9f1-5c07-5de5-b7bd-9a047eceb9f3",
  version: 2,
  id: "9dc1b9f1-5c07-5de5-b7bd-9a047eceb9f3",
  fileId: "Viw-ne.",
  scheduled: true,
  title: "Viw ne.",
  createdBy: 5,
  modifiedDateTime: "2015-01-27T11:33:11.234Z",
  live: true
}, {
  creationDateTime: "2015-04-07T18:31:02.098Z",
  status: "Scheduled",
  modifiedBy: 2,
  type: "article",
  uri: "/project/test/content/e92cf7ea-73be-5410-84d0-05ce1bf2c849",
  version: 4,
  id: "e92cf7ea-73be-5410-84d0-05ce1bf2c849",
  fileId: "Jujaw-hi.",
  scheduled: true,
  title: "Jujaw hi.",
  createdBy: 1,
  modifiedDateTime: "2015-04-07T23:31:02.098Z",
  live: true
},
...]
```

