/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserDisplay_user = {
    readonly email: string;
    readonly name: string;
    readonly faveColour: {
        readonly hexValue: string;
    };
    readonly " $refType": "UserDisplay_user";
};
export type UserDisplay_user$data = UserDisplay_user;
export type UserDisplay_user$key = {
    readonly " $data"?: UserDisplay_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserDisplay_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserDisplay_user",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'c1dfe0174fc611e43c9fe8daf06d045d';
export default node;
