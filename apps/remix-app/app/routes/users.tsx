import { Card } from "@packages/ui";
import { Link, Outlet } from "@remix-run/react";

const FILEPATH = 'routes/users.tsx'

function Users() {
    return (
        <Card filepath={<Link to='/users'>{FILEPATH}</Link>}>
            <Outlet />
        </Card>
    );
}

export default Users;