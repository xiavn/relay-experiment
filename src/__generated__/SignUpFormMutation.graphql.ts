/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignUpFormMutationVariables = {
    email: string;
    password: string;
    name: string;
    faveColour?: number | null;
};
export type SignUpFormMutationResponse = {
    readonly signup: {
        readonly token: string | null;
        readonly user: {
            readonly id: string;
            readonly name: string;
        } | null;
    } | null;
};
export type SignUpFormMutation = {
    readonly response: SignUpFormMutationResponse;
    readonly variables: SignUpFormMutationVariables;
};



/*
mutation SignUpFormMutation(
  $email: String!
  $password: String!
  $name: String!
  $faveColour: Int
) {
  signup(email: $email, password: $password, name: $name, faveColour: $faveColour) {
    token
    user {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "faveColour"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "faveColour",
        "variableName": "faveColour"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "signup",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpFormMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SignUpFormMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "18cc061bf1235360ab1b8bb22ce8892e",
    "id": null,
    "metadata": {},
    "name": "SignUpFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpFormMutation(\n  $email: String!\n  $password: String!\n  $name: String!\n  $faveColour: Int\n) {\n  signup(email: $email, password: $password, name: $name, faveColour: $faveColour) {\n    token\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e14a31a71997eb2515921ac41ca1d597';
export default node;
