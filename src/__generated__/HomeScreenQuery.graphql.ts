/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeScreenQueryVariables = {};
export type HomeScreenQueryResponse = {
    readonly currentUser: {
        readonly user: {
            readonly id: string;
        } | null;
    } | null;
};
export type HomeScreenQuery = {
    readonly response: HomeScreenQueryResponse;
    readonly variables: HomeScreenQueryVariables;
};



/*
query HomeScreenQuery {
  currentUser {
    user {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "currentUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e8204a97b2d70d7de17afd6568d9d874",
    "id": null,
    "metadata": {},
    "name": "HomeScreenQuery",
    "operationKind": "query",
    "text": "query HomeScreenQuery {\n  currentUser {\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a1f2a1186d2274e5a45be4003006c981';
export default node;
