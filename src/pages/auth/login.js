import React from "react";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { apiRequest } from "../../utils/api";
import Link from "next/link"; // Added import for Link

export default function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Check if user is already logged in
    useEffect(() => {
        // const allCookies = Cookies.get(); // Log all cookies for debugging
        // console.log("All Cookies:", allCookies);
        const token = Cookies.get("_customer_token");
        console.log("Token:", token); // Debugging log
        if (token) {
            window.location.href = "/my-account/orders";
        }
    }, []);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate form fields
        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            });
            setIsLoading(false);
            return;
        }

        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        // Make API call using the apiRequest utility
        const data = await apiRequest(process.env.NEXT_PUBLIC_API_URL + '/login', {
            method: 'POST',
            body: formData,
        });

        if (data.success === true) {
            Cookies.set("_customer_token", data.token, { expires: 7 }); // Store token in cookies for 7 days
            window.location.href = "/my-account/orders"; // Redirect to account page
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
            });
        }
        setIsLoading(false);
    };
    
    return (
        <div>



            
            <section className="fluid-block zbg-light py-4 pb-0 login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <h2 className="text-center text-dark mt-5 fw-bold text-white">Login to your Account</h2>
                            <div className="card my-5 border-0 rounded-0 overflow-hidden shadow-lg">
                                <div className="card-top bg-light" />
                                <div className="card-body p-5">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control rounded-3" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control rounded-3" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"  />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="mt-3">
                                        <Link href="/auth/forgot-password">
                                            <span className="text-dark text-decoration-underline">Forgot Password?</span>
                                        </Link>
                                    </div>
                                    <div className="text-center mt-3">
                                        {
                                            isLoading ?
                                                <button type="button" className="btn btn-primary w-100" disabled>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    Loading...
                                                </button>
                                            :
                                                <button type="submit" className="btn btn-primary w-100  rounded-0" onClick={handleSubmit}>Login</button>
                                        }
                                    </div>
                                    <div className="form-text text-center mt-3 text-dark">Not Registered?
                                        <Link href="/auth/signup">
                                            <span className="text-dark fw-bold">Create an Account</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
