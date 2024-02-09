import { Card } from "@packages/ui";
import { LoaderFunction } from "@remix-run/node";
import { Await, Link, useLoaderData, useMatches } from "@remix-run/react";
import { Suspense } from "react";
import { supabase } from "~/libs/supabase-client";
import type { HttpResponseSupabase } from "~/models/http";
import type { User } from "~/models/users";

// const FILEPATH = 'routes/users._index.tsx'

export const loader: LoaderFunction = async () => {
    const data = await supabase.from<"users", User>('users').select('*')
    return data
}

function UsersIndex() {
    const users = useLoaderData<HttpResponseSupabase<User[]>>()
    const matches = useMatches()
    const FILEPATH = matches?.[matches.length - 1]?.id
    console.log(matches)

    return (
        <Card filepath={FILEPATH}>
            <div style={{ display: 'flex', flexDirection: "column", gap: 12 }} >
                <Link to='add'>Add User</Link>
                <h4>All Users</h4>
                <div style={{ position: "relative", width: 400, display: "flex", flexDirection: "column", gap: 24 }}>
                    <Suspense fallback="loading...">
                        <Await resolve={users}>
                            {(users) => (
                                users.data.map(user => (
                                    <Card key={user.id} filepath={<Link to={user.id}>{user.username}</Link>}>
                                        Fullname: {user.full_name}
                                    </Card>
                                ))
                            )}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </Card>
    );
}

export default UsersIndex;