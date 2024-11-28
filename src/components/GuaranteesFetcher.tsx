// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// components
import Guarantees from "./Guarantees";

export default async function GuaranteesFetcher() {
  const payload = await getPayload({ config });

  return <Guarantees guarantees={await payload.find({ collection: "guarantees", pagination: false, sort: "id" })} />;
}
