/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppTabsQueryVariables = {};
export type AppTabsQueryResponse = {
    readonly currentUser: {
        readonly token: string | null;
        readonly user: {
            readonly id: string;
            readonly name: string;
        } | null;
    } | null;
};
export type AppTabsQuery = {
    readonly response: AppTabsQueryResponse;
    readonly variables: AppTabsQueryVariables;
};



/*
query AppTabsQuery {
  currentUser {
    token
    user {
      id
      name
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
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "name": "AppTabsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppTabsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b160680372348d318e5684e21e402dd4",
    "id": null,
    "metadata": {},
    "name": "AppTabsQuery",
    "operationKind": "query",
    "text": "query AppTabsQuery {\n  currentUser {\n    token\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '576eaf25b02cd517d7d1c4eb61e3bac4';
export default node;
