import { Card } from "@packages/ui";
import { LoaderFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { supabase } from "~/libs/supabase-client";
import type { HttpResponseSupabase } from "~/models/http";
import type { User } from "~/models/users";

const FILEPATH = 'routes/users.$id.tsx'

export const loader: LoaderFunction = async ({ params }) => {
    const idUser = params?.id as string
    const data = await supabase.from<"users", User>('users').select('*').eq("id", idUser).single()
    return data
}

function UsersIndex() {
    const { data } = useLoaderData<HttpResponseSupabase<User>>()

    return (
        <Card filepath={FILEPATH}>
            <h4>User Info</h4>
            <Suspense fallback="loading...">
                <Await resolve={data}>
                    {(data) => (
                        <Card filepath={data.username}>
                            Full Name: {data.full_name}
                            <br />
                            Username: {data.username}
                            <br />
                            Email: {data.email}
                            <br />
                            Phone: {data.phone}
                        </Card>
                    )}
                </Await>
            </Suspense>
        </Card>
    );
}

export default UsersIndex;