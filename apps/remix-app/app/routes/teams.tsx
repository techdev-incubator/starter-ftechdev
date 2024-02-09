import { Card } from "@packages/ui";
import { Link, Outlet } from "@remix-run/react";

const FILEPATH = 'routes/teams.tsx'

function Teams() {
    return (
        <Card filepath={<Link to='/teams'>{FILEPATH}</Link>}>
            <Outlet />
        </Card>
    );
}

export default Teams