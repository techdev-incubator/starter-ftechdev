import { Card } from "@packages/ui";
import { Outlet } from "@remix-run/react";

const FILEPATH = 'routes/teams.champions.tsx'

function Teams() {
    return (
        <Card filepath={FILEPATH}>
            Teams Champions
        </Card>
    );
}

export default Teams