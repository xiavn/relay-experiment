/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeTabRepositoryNameQueryVariables = {
    owner: string;
    name: string;
};
export type HomeTabRepositoryNameQueryResponse = {
    readonly repository: {
        readonly name: string;
    } | null;
};
export type HomeTabRepositoryNameQuery = {
    readonly response: HomeTabRepositoryNameQueryResponse;
    readonly variables: HomeTabRepositoryNameQueryVariables;
};



/*
query HomeTabRepositoryNameQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeTabRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HomeTabRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
    "cacheID": "02f74dcdb4a79e35dddd2dd087484703",
    "id": null,
    "metadata": {},
    "name": "HomeTabRepositoryNameQuery",
    "operationKind": "query",
    "text": "query HomeTabRepositoryNameQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '01e083742526859fc099f8d89c585083';
export default node;
