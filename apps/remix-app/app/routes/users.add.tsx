import { Card } from "@packages/ui";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { supabase } from "~/libs/supabase-client";

const FILEPATH = 'routes/users.add.tsx'

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const forms = {
        full_name: formData.get('full_name'),
        username: formData.get('username'),
        email: formData.get('email'),
        phone: formData.get('phone'),
    }

    const { data, status, ...response } = await supabase.from('users').insert([forms]).single()
    console.log({data, status, response})
    if (response.error) {
        console.log('error')
    }
    return redirect('/users')
}

function UsersIndex() {
    return (
        <Card filepath={FILEPATH}>
            <h4>Add User</h4>
            <Form method="POST">
                <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 200 }}>
                    <label htmlFor="full_name">
                        Full Name
                        <input type="text" name="full_name" id="full_name" placeholder="Full Name" required />
                    </label>
                    <label htmlFor="username">
                        Username
                        <input type="text" name="username" id="username" placeholder="Username" required />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" id="email" placeholder="Email" required />
                    </label>
                    <label htmlFor="phone">
                        Phone
                        <input type="phone" name="phone" id="phone" placeholder="Phone" required />
                    </label>
                    <input style={{ width: 80 }} type="submit" name="submit" value="submit" />
                </div>
            </Form>
        </Card>
    );
}

export default UsersIndex;