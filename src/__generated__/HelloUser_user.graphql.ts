/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HelloUser_user = {
    readonly name: string;
    readonly " $refType": "HelloUser_user";
};
export type HelloUser_user$data = HelloUser_user;
export type HelloUser_user$key = {
    readonly " $data"?: HelloUser_user$data;
    readonly " $fragmentRefs": FragmentRefs<"HelloUser_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HelloUser_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '58838abc7226c578513bc97b0ea95305';
export default node;
