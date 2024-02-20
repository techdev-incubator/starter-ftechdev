import type { MetaFunction } from "@remix-run/node";
import { Card } from '@package/ui';
import { Link, Outlet } from "@remix-run/react";

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
      Routes
      <ul>
        <li><Link to='teams'>Teams</Link></li>
        <li><Link to='users'>Users</Link></li>
      </ul>
      <Outlet />
    </Card>
  );
}
