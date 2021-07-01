/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppTabsQueryVariables = {};
export type AppTabsQueryResponse = {
    readonly currentUser: {
        readonly token: string | null;
        readonly user: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"HelloUser_user">;
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
      ...HelloUser_user
    }
  }
}

fragment HelloUser_user on User {
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTabsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthPayload",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "HelloUser_user"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppTabsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthPayload",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "aeb4a8ca5dd7fb79296fd5e01a4e8e1f",
    "id": null,
    "metadata": {},
    "name": "AppTabsQuery",
    "operationKind": "query",
    "text": "query AppTabsQuery {\n  currentUser {\n    token\n    user {\n      id\n      ...HelloUser_user\n    }\n  }\n}\n\nfragment HelloUser_user on User {\n  name\n}\n"
  }
};
})();
(node as any).hash = '0f279986dac656e5abbec74d1a7b5ac3';
export default node;
