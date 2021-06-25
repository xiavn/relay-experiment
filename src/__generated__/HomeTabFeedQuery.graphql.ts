/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeTabFeedQueryVariables = {};
export type HomeTabFeedQueryResponse = {
    readonly feed: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"FeedItem_link">;
    }>;
};
export type HomeTabFeedQuery = {
    readonly response: HomeTabFeedQueryResponse;
    readonly variables: HomeTabFeedQueryVariables;
};



/*
query HomeTabFeedQuery {
  feed {
    ...FeedItem_link
    id
  }
}

fragment FeedItem_link on Link {
  description
  url
  id
  postedBy {
    ...UserDisplay_user
    id
  }
  votes(first: 5) {
    pageCursors {
      totalRecords
    }
  }
}

fragment UserDisplay_user on User {
  email
  name
  faveColour {
    hexValue
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FeedItem_link"
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
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "postedBy",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
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
                "concreteType": "Colour",
                "kind": "LinkedField",
                "name": "faveColour",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hexValue",
                    "storageKey": null
                  },
                  (v0/*: any*/)
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5a820cc45ce056b5a93589453574371b",
    "id": null,
    "metadata": {},
    "name": "HomeTabFeedQuery",
    "operationKind": "query",
    "text": "query HomeTabFeedQuery {\n  feed {\n    ...FeedItem_link\n    id\n  }\n}\n\nfragment FeedItem_link on Link {\n  description\n  url\n  id\n  postedBy {\n    ...UserDisplay_user\n    id\n  }\n  votes(first: 5) {\n    pageCursors {\n      totalRecords\n    }\n  }\n}\n\nfragment UserDisplay_user on User {\n  email\n  name\n  faveColour {\n    hexValue\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '5e9f21bcfd39e927e76dee953513076f';
export default node;
