/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeScreen_user = {
    readonly id: string;
    readonly " $refType": "HomeScreen_user";
};
export type HomeScreen_user$data = HomeScreen_user;
export type HomeScreen_user$key = {
    readonly " $data"?: HomeScreen_user$data;
    readonly " $fragmentRefs": FragmentRefs<"HomeScreen_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeScreen_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '8cd01a14cede3cf55e5417a17a85ee0f';
export default node;
