# Employee Manager Day 9

Over the next two days we will finish off the employee manager and add the edit and delete functionality to manage a group of employees from a single department.

```
client/js
    │ 
    ├── dashboard
    │   ├── api  
    │   ├── control-strip
    │   ├── events
    │   ├── keypoints
    │   ├── panel
    │   ├── sidebar
    │   └── widgets
    │ 
    │ 
    ├── utils
    └── index.js
```

### DashBoard

__api folder:__  
Index.js exports an object with methods to create url's for each route required in the dashboard sidebar and panel display.  
```
api
└── index.js
```

__control-strip:__  
Containes the templates and code base for the dashboard control strip. For the sake of time the control strip was added directly to the dashboard.ejs template found in the server/views/dashboard.ejs

__events:__  
The EventManager is a singleton instance that is used as a message bus between the sidbar and the panel display. It handles the API requests using the dataFetcher and return responses to subscribed view.  
```events
└── EventManager.js
```

__keypoints:__  
Containes the templates and code for the kep points displayed from a given display panel. This will be completed as a bonus task. 
```keypoints
└── index.js
```

__panel:__  
Containes the templates and code for any widget required in a panel.  

__sidebar:__  
Containes the templates and code for the the sidebar builds.  

__widgets:__  
Containes the templates and code for any widget required in a panel.   

 



 

 


 


 
  