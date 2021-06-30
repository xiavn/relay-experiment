/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LogInFormMutationVariables = {
    email: string;
    password: string;
};
export type LogInFormMutationResponse = {
    readonly login: {
        readonly token: string | null;
        readonly user: {
            readonly id: string;
            readonly name: string;
        } | null;
    } | null;
};
export type LogInFormMutation = {
    readonly response: LogInFormMutationResponse;
    readonly variables: LogInFormMutationVariables;
};



/*
mutation LogInFormMutation(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
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
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "login",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LogInFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogInFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ad5eb50e9a1a3523d0d65ea76e215bd8",
    "id": null,
    "metadata": {},
    "name": "LogInFormMutation",
    "operationKind": "mutation",
    "text": "mutation LogInFormMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9e81cd61751358bfa5b61b68f22006fc';
export default node;
