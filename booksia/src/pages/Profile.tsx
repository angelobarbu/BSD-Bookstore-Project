import React, { useState } from "react";
import Layout from "@/components/ui/layout.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "currentPassword123",
    });

    const [editingField, setEditingField] = useState<string | null>(null);
    const [formValues, setFormValues] = useState({
        name: profile.name,
        email: profile.email,
        oldPassword: "",
        newPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSave = (field: string) => {
        if (field === "password") {
            if (formValues.oldPassword !== profile.password) {
                setError("Old password is incorrect.");
                return;
            }
            setProfile({ ...profile, password: formValues.newPassword });
        } else {
            setProfile({ ...profile, [field]: formValues[field] });
        }
        setEditingField(null);
        setError("");
        setFormValues({ ...formValues, oldPassword: "", newPassword: "" });
    };

    const handleCancel = () => {
        setEditingField(null);
        setError("");
        setFormValues({
            name: profile.name,
            email: profile.email,
            oldPassword: "",
            newPassword: "",
        });
    };

    return (
        <Layout>
            <section className="flex flex-col items-center p-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold mt-4">John Doe</h1>
                <div className="mt-4 w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-2">
                    <div>
                        <Label className="text-lg font-bold">Name</Label>
                        {editingField === "name" ? (
                            <div className="mt-2 space-y-2">
                                <Input
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                                <div className="flex justify-between">
                                    <Button
                                        onClick={() => handleSave("name")}
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        onClick={handleCancel}
                                        className="bg-gray-500 hover:bg-gray-600 text-white"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center mt-2">
                                <span>{profile.name}</span>
                                <Button onClick={() => setEditingField("name")}>
                                    Edit
                                </Button>
                            </div>
                        )}
                    </div>
                    <div>
                        <Label className="text-lg font-bold">Email</Label>
                        {editingField === "email" ? (
                            <div className="mt-2 space-y-2">
                                <Input
                                    name="email"
                                    type="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                <div className="flex justify-between">
                                    <Button
                                        onClick={() => handleSave("email")}
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        onClick={handleCancel}
                                        className="bg-gray-500 hover:bg-gray-600 text-white"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center mt-2">
                                <span>{profile.email}</span>
                                <Button onClick={() => setEditingField("email")}>
                                    Edit
                                </Button>
                            </div>
                        )}
                    </div>
                    <div>
                        <Label className="text-lg font-bold">Password</Label>
                        {editingField === "password" ? (
                            <div className="mt-2 space-y-2">
                                <Input
                                    name="oldPassword"
                                    type="password"
                                    placeholder="Old Password"
                                    value={formValues.oldPassword}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="newPassword"
                                    type="password"
                                    placeholder="New Password"
                                    value={formValues.newPassword}
                                    onChange={handleChange}
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <div className="flex justify-between">
                                    <Button
                                        onClick={() => handleSave("password")}
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        onClick={handleCancel}
                                        className="bg-gray-500 hover:bg-gray-600 text-white"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center mt-2">
                                <span>********</span>
                                <Button onClick={() => setEditingField("password")}>
                                    Edit
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-6">
                    <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                        Logout
                    </Button>
                </div>
            </section>
        </Layout>
    );
}
