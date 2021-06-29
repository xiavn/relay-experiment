/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HelloUserQueryVariables = {
    id: number;
};
export type HelloUserQueryResponse = {
    readonly user: {
        readonly name: string;
    } | null;
};
export type HelloUserQuery = {
    readonly response: HelloUserQueryResponse;
    readonly variables: HelloUserQueryVariables;
};



/*
query HelloUserQuery(
  $id: Int!
) {
  user(id: $id) {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HelloUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HelloUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "06d1734d2c4e4a24e431fc5ffada832d",
    "id": null,
    "metadata": {},
    "name": "HelloUserQuery",
    "operationKind": "query",
    "text": "query HelloUserQuery(\n  $id: Int!\n) {\n  user(id: $id) {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bc8cdd8e5cc86dd5eab6d4d82eb945c8';
export default node;
