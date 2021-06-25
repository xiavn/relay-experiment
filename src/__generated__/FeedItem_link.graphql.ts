/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FeedItem_link = {
    readonly description: string | null;
    readonly url: string | null;
    readonly id: string;
    readonly postedBy: {
        readonly " $fragmentRefs": FragmentRefs<"UserDisplay_user">;
    } | null;
    readonly votes: {
        readonly pageCursors: {
            readonly totalRecords: number;
        } | null;
    } | null;
    readonly " $refType": "FeedItem_link";
};
export type FeedItem_link$data = FeedItem_link;
export type FeedItem_link$key = {
    readonly " $data"?: FeedItem_link$data;
    readonly " $fragmentRefs": FragmentRefs<"FeedItem_link">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeedItem_link",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "postedBy",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserDisplay_user"
        }
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
  "type": "Link",
  "abstractKey": null
};
(node as any).hash = '160123b25a36d33a18ebae6714119ea7';
export default node;
