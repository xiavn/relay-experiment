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
        readonly postedBy: {
            readonly email: string;
            readonly name: string;
            readonly faveColour: {
                readonly hexValue: string;
            };
        } | null;
        readonly votes: {
            readonly pageCursors: {
                readonly totalRecords: number;
            } | null;
        } | null;
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
    postedBy {
      email
      name
      faveColour {
        hexValue
        id
      }
      id
    }
    votes(first: 5) {
      pageCursors {
        totalRecords
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hexValue",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 5
    }
  ],
  "concreteType": "LinkVotes_Connection",
  "kind": "LinkedField",
  "name": "votes",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageCursors",
      "kind": "LinkedField",
      "name": "pageCursors",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalRecords",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "votes(first:5)"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeTabFeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "feed",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "postedBy",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Colour",
                "kind": "LinkedField",
                "name": "faveColour",
                "plural": false,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
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
    "name": "HomeTabFeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "feed",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "postedBy",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Colour",
                "kind": "LinkedField",
                "name": "faveColour",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "54aaebfb5cc0d77620215911406d45d6",
    "id": null,
    "metadata": {},
    "name": "HomeTabFeedQuery",
    "operationKind": "query",
    "text": "query HomeTabFeedQuery {\n  feed {\n    description\n    url\n    id\n    postedBy {\n      email\n      name\n      faveColour {\n        hexValue\n        id\n      }\n      id\n    }\n    votes(first: 5) {\n      pageCursors {\n        totalRecords\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5ee7fa3e62e84c6d787e1c39ad8cfcde';
export default node;
