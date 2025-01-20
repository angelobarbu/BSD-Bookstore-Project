import React, { useEffect, useState } from "react";
import Layout from "@/components/ui/layout.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingField, setEditingField] = useState<string | null>(null);
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        oldPassword: "",
        newPassword: "",
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("Token is missing. Please log in.");
                }

                const response = await fetch(`http://localhost:8080/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user profile");
                }

                const data = await response.json();
                setProfile(data);
                setFormValues({
                    fullName: data.fullName,
                    email: data.email,
                    oldPassword: "",
                    newPassword: "",
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSave = async (field: string) => {
        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                throw new Error("Token is missing. Please log in.");
            }

            const payload: Record<string, string> = {};
            if (field === "fullName") {
                payload.fullName = formValues.fullName;
            } else if (field === "email") {
                payload.email = formValues.email;
            } else if (field === "password") {
                if (!formValues.oldPassword || !formValues.newPassword) {
                    setError("Both old and new passwords are required.");
                    return;
                }
                payload.oldPassword = formValues.oldPassword;
                payload.newPassword = formValues.newPassword;
            }

            const response = await fetch(`http://localhost:8080/users`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to update user profile");
            }

            const updatedData = await response.json();
            setProfile(updatedData);
            setEditingField(null);
            setError("");
            setFormValues({
                ...formValues,
                oldPassword: "",
                newPassword: "",
            });
        } catch (err) {
            setError(err.message);
        }
    };

    const handleCancel = () => {
        setEditingField(null);
        setError("");
        setFormValues({
            fullName: profile.fullName,
            email: profile.email,
            oldPassword: "",
            newPassword: "",
        });
    };

    if (loading) {
        return <p>Loading profile...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Layout>
            <section className="flex flex-col items-center p-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{profile.fullName?.charAt(0)}</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold mt-4">{profile.fullName}</h1>
                <div className="mt-4 w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-2">
                    <div>
                        <Label className="text-lg font-bold">Name</Label>
                        {editingField === "fullName" ? (
                            <div className="mt-2 space-y-2">
                                <Input
                                    name="fullName"
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                />
                                <div className="flex justify-between">
                                    <Button
                                        onClick={() => handleSave("fullName")}
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
                                <span>{profile.fullName}</span>
                                <Button onClick={() => setEditingField("fullName")}>
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
                                <Button onClick={() => setEditingField("password")}>Edit</Button>
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