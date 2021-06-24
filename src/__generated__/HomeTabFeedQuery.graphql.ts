/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeTabFeedQueryVariables = {};
export type HomeTabFeedQueryResponse = {
    readonly feed: ReadonlyArray<{
        readonly description: string | null;
        readonly url: string | null;
        readonly id: string;
    } | null>;
};
export type HomeTabFeedQuery = {
    readonly response: HomeTabFeedQueryResponse;
    readonly variables: HomeTabFeedQueryVariables;
};



/*
query HomeTabFeedQuery {
  feed {
    description
    url
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "feed",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeTabFeedQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeTabFeedQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "97d584d67081da66c72990ce97d08826",
    "id": null,
    "metadata": {},
    "name": "HomeTabFeedQuery",
    "operationKind": "query",
    "text": "query HomeTabFeedQuery {\n  feed {\n    description\n    url\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c6fa237b28d426687d8a2e0b6571b084';
export default node;
