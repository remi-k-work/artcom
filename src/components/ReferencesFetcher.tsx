// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// components
import References from "./References";

export default async function ReferencesFetcher() {
  const payload = await getPayload({ config });

  return <References references={await payload.find({ collection: "references", pagination: false, sort: "id" })} />;
}
