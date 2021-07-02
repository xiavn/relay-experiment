/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignUpFormQueryVariables = {};
export type SignUpFormQueryResponse = {
    readonly colours: ReadonlyArray<{
        readonly id: string;
        readonly localId: number;
        readonly name: string;
        readonly hexValue: string;
    } | null>;
};
export type SignUpFormQuery = {
    readonly response: SignUpFormQueryResponse;
    readonly variables: SignUpFormQueryVariables;
};



/*
query SignUpFormQuery {
  colours {
    id
    localId
    name
    hexValue
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Colour",
    "kind": "LinkedField",
    "name": "colours",
    "plural": true,
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
        "name": "localId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hexValue",
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
    "name": "SignUpFormQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SignUpFormQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "41e12b5bd1cdd0f2c9e04ae0b49f66c2",
    "id": null,
    "metadata": {},
    "name": "SignUpFormQuery",
    "operationKind": "query",
    "text": "query SignUpFormQuery {\n  colours {\n    id\n    localId\n    name\n    hexValue\n  }\n}\n"
  }
};
})();
(node as any).hash = '7c631103e725d8f431d35ce49f7b61d3';
export default node;
