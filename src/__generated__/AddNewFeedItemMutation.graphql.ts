/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddNewFeedItemMutationVariables = {
    url: string;
    description: string;
};
export type AddNewFeedItemMutationResponse = {
    readonly createLink: {
        readonly " $fragmentRefs": FragmentRefs<"FeedItem_link">;
    };
};
export type AddNewFeedItemMutation = {
    readonly response: AddNewFeedItemMutationResponse;
    readonly variables: AddNewFeedItemMutationVariables;
};



/*
mutation AddNewFeedItemMutation(
  $url: String!
  $description: String!
) {
  createLink(url: $url, description: $description) {
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
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "url"
},
v2 = [
  {
    "kind": "Variable",
    "name": "description",
    "variableName": "description"
  },
  {
    "kind": "Variable",
    "name": "url",
    "variableName": "url"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
    "name": "AddNewFeedItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "createLink",
        "plural": false,
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddNewFeedItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "createLink",
        "plural": false,
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
          (v3/*: any*/),
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
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
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
    "cacheID": "7db19db17e3f6499deded74e4ee1fbd6",
    "id": null,
    "metadata": {},
    "name": "AddNewFeedItemMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewFeedItemMutation(\n  $url: String!\n  $description: String!\n) {\n  createLink(url: $url, description: $description) {\n    ...FeedItem_link\n    id\n  }\n}\n\nfragment FeedItem_link on Link {\n  description\n  url\n  id\n  postedBy {\n    ...UserDisplay_user\n    id\n  }\n  votes(first: 5) {\n    pageCursors {\n      totalRecords\n    }\n  }\n}\n\nfragment UserDisplay_user on User {\n  email\n  name\n  faveColour {\n    hexValue\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '78725658f34b330446c7f0e50d45ed70';
export default node;
