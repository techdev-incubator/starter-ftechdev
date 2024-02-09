import type { MetaFunction } from "@remix-run/node";
import { Card } from '@packages/ui';
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const FILEPATH = '_index.tsx'

export default function Index() {
  return ( 
    <Card filepath={FILEPATH}>
      <Outlet />
    </Card>
  );
}
