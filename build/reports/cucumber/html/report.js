$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authorisation.feature");
formatter.feature({
  "line": 2,
  "name": "Authorisation and Access Control",
  "description": "Verify that the access control model is enforced so that only the authorised users have access to their own data",
  "id": "authorisation-and-access-control",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Users can view restricted resources for which they are authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@iriusrisk-authorised_resources"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "a new browser or client instance",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the client/browser is configured to use an intercepting proxy",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the username \u003cusername\u003e is used",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the password \u003cpassword\u003e is used",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the HTTP requests and responses are recorded",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they access the restricted resource: \u003cmethod\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the string: \u003csensitiveData\u003e should be present in one of the HTTP responses",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;",
  "rows": [
    {
      "cells": [
        "method",
        "username",
        "password",
        "sensitiveData"
      ],
      "line": 19,
      "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;1"
    },
    {
      "cells": [
        "viewBobsProfile",
        "bob",
        "password",
        "Robert"
      ],
      "line": 20,
      "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;2"
    },
    {
      "cells": [
        "viewAlicesProfile",
        "alice",
        "password",
        "alice@continuumsecurity.net"
      ],
      "line": 21,
      "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;3"
    },
    {
      "cells": [
        "viewAllUsers",
        "admin",
        "password",
        "User List"
      ],
      "line": 22,
      "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Users can view restricted resources for which they are authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@authorisation"
    },
    {
      "line": 5,
      "name": "@iriusrisk-authorised_resources"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "a new browser or client instance",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the client/browser is configured to use an intercepting proxy",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the username bob is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the HTTP requests and responses are recorded",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they access the restricted resource: viewBobsProfile",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the string: Robert should be present in one of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 8629259287,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.enableLoggingDriver()"
});
formatter.result({
  "duration": 257812,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.clearProxy()"
});
formatter.result({
  "duration": 3962597137,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 4122228777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bob",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 4183698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 229896,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 983052553,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.clearProxy()"
});
formatter.result({
  "duration": 1089503067,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.noActionForRecordingHttpRequestResponses()"
});
formatter.result({
  "duration": 132601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewBobsProfile",
      "offset": 37
    }
  ],
  "location": "WebApplicationSteps.setMethodName(String)"
});
formatter.result({
  "duration": 212243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkAccessToResource(String)"
});
formatter.result({
  "duration": 2813396621,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Users can view restricted resources for which they are authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@authorisation"
    },
    {
      "line": 5,
      "name": "@iriusrisk-authorised_resources"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "a new browser or client instance",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the client/browser is configured to use an intercepting proxy",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the username alice is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the HTTP requests and responses are recorded",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they access the restricted resource: viewAlicesProfile",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the string: alice@continuumsecurity.net should be present in one of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 6250711,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.enableLoggingDriver()"
});
formatter.result({
  "duration": 520550,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.clearProxy()"
});
formatter.result({
  "duration": 1505259079,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1108829940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 356749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 487298,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 1146390036,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.clearProxy()"
});
formatter.result({
  "duration": 1854033219,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.noActionForRecordingHttpRequestResponses()"
});
formatter.result({
  "duration": 263149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAlicesProfile",
      "offset": 37
    }
  ],
  "location": "WebApplicationSteps.setMethodName(String)"
});
formatter.result({
  "duration": 360444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice@continuumsecurity.net",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkAccessToResource(String)"
});
formatter.result({
  "duration": 1921763073,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Users can view restricted resources for which they are authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-can-view-restricted-resources-for-which-they-are-authorised;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@authorisation"
    },
    {
      "line": 5,
      "name": "@iriusrisk-authorised_resources"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "a new browser or client instance",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the client/browser is configured to use an intercepting proxy",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the username admin is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the proxy logs are cleared",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the HTTP requests and responses are recorded",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they access the restricted resource: viewAllUsers",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the string: User List should be present in one of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1084206,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.enableLoggingDriver()"
});
formatter.result({
  "duration": 383434,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.clearProxy()"
});
formatter.result({
  "duration": 1143980232,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1442067620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 347718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 358802,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 1232054660,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.clearProxy()"
});
formatter.result({
  "duration": 1157357722,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.noActionForRecordingHttpRequestResponses()"
});
formatter.result({
  "duration": 259865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllUsers",
      "offset": 37
    }
  ],
  "location": "WebApplicationSteps.setMethodName(String)"
});
formatter.result({
  "duration": 433108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User List",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkAccessToResource(String)"
});
formatter.result({
  "duration": 1166817947,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Users must not be able to view resources for which they are not authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@iriusrisk-cwe-639"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the username \u003cusername\u003e is used",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the password \u003cpassword\u003e is used",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the previously recorded HTTP Requests for \u003cmethod\u003e are replayed using the current session ID",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the string: \u003csensitiveData\u003e should not be present in any of the HTTP responses",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;",
  "rows": [
    {
      "cells": [
        "method",
        "username",
        "password",
        "sensitiveData"
      ],
      "line": 36,
      "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;1"
    },
    {
      "cells": [
        "viewBobsProfile",
        "alice",
        "password",
        "Robert"
      ],
      "line": 37,
      "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;2"
    },
    {
      "cells": [
        "viewAlicesProfile",
        "bob",
        "password",
        "alice@continuumsecurity.net"
      ],
      "line": 38,
      "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;3"
    },
    {
      "cells": [
        "viewAllUsers",
        "alice",
        "password",
        "User List"
      ],
      "line": 39,
      "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;4"
    },
    {
      "cells": [
        "viewAllUsers",
        "bob",
        "password",
        "User List"
      ],
      "line": 40,
      "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Users must not be able to view resources for which they are not authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@iriusrisk-cwe-639"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the username alice is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the previously recorded HTTP Requests for viewBobsProfile are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the string: Robert should not be present in any of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 508234,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1113764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 338275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 305433,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1720882325,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 992163006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewBobsProfile",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 349771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 4942853988,
  "error_message": "java.lang.AssertionError: \nExpected: \u003cfalse\u003e\n     but: was \u003ctrue\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat net.continuumsecurity.steps.WebApplicationSteps.checkAccessUsingCookieMethod(WebApplicationSteps.java:491)\r\n\tat net.continuumsecurity.steps.WebApplicationSteps.checkNoAccessToResource(WebApplicationSteps.java:446)\r\n\tat ✽.Then the string: Robert should not be present in any of the HTTP responses(authorisation.feature:34)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 38,
  "name": "Users must not be able to view resources for which they are not authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@iriusrisk-cwe-639"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the username bob is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the previously recorded HTTP Requests for viewAlicesProfile are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the string: alice@continuumsecurity.net should not be present in any of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 762762,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1242670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bob",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 351824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 295170,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1177515095,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 747057227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAlicesProfile",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 359213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice@continuumsecurity.net",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 4435491360,
  "error_message": "java.lang.AssertionError: \nExpected: \u003cfalse\u003e\n     but: was \u003ctrue\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat net.continuumsecurity.steps.WebApplicationSteps.checkAccessUsingCookieMethod(WebApplicationSteps.java:491)\r\n\tat net.continuumsecurity.steps.WebApplicationSteps.checkNoAccessToResource(WebApplicationSteps.java:446)\r\n\tat ✽.Then the string: alice@continuumsecurity.net should not be present in any of the HTTP responses(authorisation.feature:34)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 39,
  "name": "Users must not be able to view resources for which they are not authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@iriusrisk-cwe-639"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the username alice is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the previously recorded HTTP Requests for viewAllUsers are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the string: User List should not be present in any of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 559551,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1410577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 349770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 315286,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1477760221,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 830436848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllUsers",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 392055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User List",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 1656084877,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Users must not be able to view resources for which they are not authorised",
  "description": "",
  "id": "authorisation-and-access-control;users-must-not-be-able-to-view-resources-for-which-they-are-not-authorised;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@iriusrisk-cwe-639"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the username bob is used",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the password password is used",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the previously recorded HTTP Requests for viewAllUsers are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the string: User List should not be present in any of the HTTP responses",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 508234,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1141270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bob",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setUsernameFromExamples(String)"
});
formatter.result({
  "duration": 272181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "WebApplicationSteps.setCredentialsFromExamples(String)"
});
formatter.result({
  "duration": 261917,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1158771583,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.loginWithSetCredentials()"
});
formatter.result({
  "duration": 825076163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllUsers",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 1413040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User List",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 1776485981,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Un-authenticated users should not be able to view restricted resources",
  "description": "",
  "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@iriusrisk-cwe-306"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the previously recorded HTTP Requests for \u003cmethod\u003e are replayed using the current session ID",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the string: \u003csensitiveData\u003e should not be present in any of the HTTP responses",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;",
  "rows": [
    {
      "cells": [
        "method",
        "sensitiveData"
      ],
      "line": 50,
      "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;1"
    },
    {
      "cells": [
        "viewBobsProfile",
        "Robert"
      ],
      "line": 51,
      "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;2"
    },
    {
      "cells": [
        "viewAlicesProfile",
        "alice@continuumsecurity.net"
      ],
      "line": 52,
      "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;3"
    },
    {
      "cells": [
        "viewAllUsers",
        "User List"
      ],
      "line": 53,
      "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "Un-authenticated users should not be able to view restricted resources",
  "description": "",
  "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@iriusrisk-cwe-306"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the previously recorded HTTP Requests for viewBobsProfile are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the string: Robert should not be present in any of the HTTP responses",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 789036,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1127312,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1227997404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewBobsProfile",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 280802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 5110596445,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Un-authenticated users should not be able to view restricted resources",
  "description": "",
  "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@iriusrisk-cwe-306"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the previously recorded HTTP Requests for viewAlicesProfile are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the string: alice@continuumsecurity.net should not be present in any of the HTTP responses",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 466771,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 2334266,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1299578428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAlicesProfile",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 300917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice@continuumsecurity.net",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 5010282513,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Un-authenticated users should not be able to view restricted resources",
  "description": "",
  "id": "authorisation-and-access-control;un-authenticated-users-should-not-be-able-to-view-restricted-resources;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@iriusrisk-cwe-306"
    },
    {
      "line": 1,
      "name": "@authorisation"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the access control map for authorised users has been populated",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "a new browser or client instance",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the login page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the previously recorded HTTP Requests for viewAllUsers are replayed using the current session ID",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the string: User List should not be present in any of the HTTP responses",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationSteps.checkIfMapPopulated()"
});
formatter.result({
  "duration": 464308,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.createAppForAnyClient()"
});
formatter.result({
  "duration": 1092828,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationSteps.openLoginPageFromGiven()"
});
formatter.result({
  "duration": 1182626177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllUsers",
      "offset": 42
    }
  ],
  "location": "WebApplicationSteps.areReplayedUsingCSessID(String)"
});
formatter.result({
  "duration": 250833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User List",
      "offset": 12
    }
  ],
  "location": "WebApplicationSteps.checkNoAccessToResource(String)"
});
formatter.result({
  "duration": 1916411420,
  "status": "passed"
});
});