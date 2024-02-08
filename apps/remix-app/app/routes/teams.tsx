import { Card } from "@packages/ui";
import { Outlet } from "@remix-run/react";

const FILEPATH = 'routes/teams._index.tsx'

function Teams() {
    return (
        <Card filepath={FILEPATH}>
            <Outlet />
        </Card>
    );
}

export default Teams