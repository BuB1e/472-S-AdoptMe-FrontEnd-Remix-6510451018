import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import BehaviorDetail from "~/components/behaviorDetail";
import { photoPath } from "~/server/config.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const Photo = photoPath();
  return { Photo };
}

export default function BehaviorCommonPage() {
  const { Photo } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const topic = searchParams.get("topic");
  const img = searchParams.get("img");
  let image;
  if (type == "Rabbits") {
    image = Photo+"rabbit1.jpg";
  } else if (type == "Hamster") {
    image = Photo+"the-hamster.png";
  } else if (type == "Chinchillas") {
    image = Photo+"chinchilla1.jpg";
  } else if (type == "Birds") {
    image = Photo+"birds1.webp";
  } else {
    image = img;
  }

  return (
    <div className="flex flex-col justify-start items-center bg-primary-white-tone w-auto min-h-screen m-10 p-10 space-y-8 rounded-2xl">
      <h1 className="font-bold text-black text-[64px]">{type} {topic} Behavior</h1>
      <img
        src={image!}
        alt={type || ""}
      />
      <BehaviorDetail animal={type!} topic={topic || ""}/>
    </div>
  );
}
