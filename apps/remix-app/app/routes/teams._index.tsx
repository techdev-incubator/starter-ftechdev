import { Card } from "@packages/ui";
import { Link } from "@remix-run/react";

const FILEPATH = 'routes/teams._index.tsx'

function Teams() {
    return (
        <Card filepath={FILEPATH}>
            <h4>Teams Index</h4>
            <Link to='champions'>Champions</Link>
        </Card>
    );
}

export default Teams